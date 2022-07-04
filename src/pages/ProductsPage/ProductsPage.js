import "./ProductsPage.scss";
import React, { useEffect, useRef, useState } from "react";
import Products from "../../components/Products/Products";
import { productsColRef, first } from "../../firebase";
import useCollection from "../../hooks/useCollection";
import Loader from "../../components/Loader/Loader";
import { query, startAfter, limit, getDocs } from "firebase/firestore";

const ProductsPage = () => {
  const [isSortedByPrice, setIsSortedByPrice] = useState(false);
  const [isSortedByModal, setIsSortedByModal] = useState(false);
  const [selectedPriceOrder, setSelectedPriceOrder] = useState("");
  const [selectedModal, setSelectedModal] = useState("");
  const { products, loading, snapshot } = useCollection(first);
  const [requestedProducts, setRequestedProducts] = useState(null);
  const [productsOnCurrentPage, setProductsOnCurrentPage] = useState(null);
  const [snapshotTracker, setSnapshotTracker] = useState(null);
  const [isLastPage, setIsLastPage] = useState(false);

  //Create functions to track sorting methods
  const handlePriceSorting = (e) => {
    console.log(e.target.value);
    if (e.target.value) {
      setIsSortedByPrice(true);
      setSelectedPriceOrder(e.target.value);
    } else {
      setIsSortedByPrice(false);
      setSelectedPriceOrder("");
    }
  };

  const handleModalSearching = (e) => {
    if (e.target.value) {
      setIsSortedByModal(true);
      setSelectedModal(e.target.value);
    } else {
      setIsSortedByModal(false);
      setSelectedModal("");
    }
  };

  //Create a function to get the next set of products
  const nextProducts = async () => {
    const lastVisible = snapshotTracker.docs[snapshotTracker.docs.length - 1];
    const nextQuery = query(productsColRef, startAfter(lastVisible), limit(9));
    const nextProducts = await getDocs(nextQuery);

    const tempProducts = [];
    nextProducts.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      tempProducts.push({ ...doc.data(), id: doc.id });
    });

    console.log(nextProducts.docs.length);

    //Check if it's last
    if (nextProducts.docs.length === 9) {
      tempProducts.pop();
    } else {
      setIsLastPage(true);
    }

    //Keep track of requested product and products on current page for filtering purposes
    setRequestedProducts(requestedProducts.concat(tempProducts));
    setProductsOnCurrentPage(requestedProducts.concat(tempProducts));
    //keep track of current snapshot to continue paginating
    setSnapshotTracker(nextProducts);
  };

  //Set page title
  useEffect(() => {
    document.title = "Products | Paperman";
  }, []);

  //Set up initial products and snapshot on load
  useEffect(() => {
    setRequestedProducts(products);
    setProductsOnCurrentPage(products);
    setSnapshotTracker(snapshot);
  }, [products]);

  //Check condition for filter and sorting
  useEffect(() => {
    //there is no sort by model or price
    if (!isSortedByModal && !isSortedByPrice) {
      setRequestedProducts(productsOnCurrentPage);
    }
    //check if sorting
    if (isSortedByModal || isSortedByPrice) {
      //Always check filter by model first
      //If there is a selected model, filter
      if (selectedModal) {
        const tempProducts = productsOnCurrentPage.filter((product) =>
          product.modals.includes(selectedModal)
        );
        //check if also sort by price
        if (isSortedByPrice) {
          if (selectedPriceOrder === "Low to High") {
            tempProducts.sort((a, b) => a.price - b.price);
            return setRequestedProducts(tempProducts);
          } else if (selectedPriceOrder === "High to Low") {
            tempProducts.sort((a, b) => b.price - a.price);
            return setRequestedProducts(tempProducts);
          } else {
            return setRequestedProducts(tempProducts);
          }
        }
        // if not, return filtered products
        else {
          return setRequestedProducts(tempProducts);
        }
      }
      // if no selected model, check if filtering by price
      else {
        if (isSortedByPrice) {
          const tempProducts = productsOnCurrentPage.map((product) => product);
          if (selectedPriceOrder === "Low to High") {
            tempProducts.sort((a, b) => a.price - b.price);
            return setRequestedProducts(tempProducts);
          } else if (selectedPriceOrder === "High to Low") {
            tempProducts.sort((a, b) => b.price - a.price);
            return setRequestedProducts(tempProducts);
          } else {
            setRequestedProducts(tempProducts);
          }
        }
      }
    }
  }, [selectedModal, selectedPriceOrder]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="products-page">
      <div className="view">
        {/* filter by price */}
        <label className="view__price">
          <select
            className="input view__price-selection"
            name="price-selection"
            id="price-selection"
            onChange={handlePriceSorting}
          >
            <option className="view__price-option" value="">
              Sort by Price
            </option>
            <option className="view__price-option" value="Low to High">
              Low to High
            </option>
            <option className="view__price-option" value="High to Low">
              High to Low
            </option>
          </select>
        </label>

        {/* filter by modals */}
        <label className="view__modals">
          <select
            className="input view__modals-selection"
            name="modals-selection"
            id="modals-selection"
            onChange={handleModalSearching}
          >
            <option className="product-detail__modal-option" value="">
              --Please choose a phone modal--
            </option>
            <option className="product-detail__modal-option" value="iPhone 7">
              iPhone 7
            </option>
            <option
              className="product-detail__modal-option"
              value="iPhone 7 Plus"
            >
              iPhone 7 Plus
            </option>
            <option className="product-detail__modal-option" value="iPhone X">
              iPhone X
            </option>
            <option
              className="product-detail__modal-option"
              value="iPhone 12 Pro"
            >
              iPhone 12 Pro
            </option>
          </select>
        </label>
      </div>
      <h2 className="view__title">All Products</h2>
      <div className="line view__line "></div>
      <Products
        products={requestedProducts ?? products}
        nextProducts={nextProducts}
        isLastPage={isLastPage}
      />
    </div>
  );
};

export default ProductsPage;
