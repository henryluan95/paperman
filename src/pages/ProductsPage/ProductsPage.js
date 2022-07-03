import "./ProductsPage.scss";
import React, { useEffect, useRef, useState } from "react";
import Products from "../../components/Products/Products";
import { productsColRef } from "../../firebase";
import useCollection from "../../hooks/useCollection";
import Loader from "../../components/Loader/Loader";

const ProductsPage = () => {
  const [isSortedByPrice, setIsSortedByPrice] = useState(false);
  const [isSortedByModal, setIsSortedByModal] = useState(false);
  const [selectedPriceOrder, setSelectedPriceOrder] = useState("");
  const [selectedModal, setSelectedModal] = useState("");
  const { products, loading } = useCollection(productsColRef);
  const [requestedProducts, setRequestedProducts] = useState(null);

  const priceSelectionEl = useRef(null);
  const modalSelectionEl = useRef(null);

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
    // setIsSortedByModal(false);
    // modalSelectionEl.current.value = "";
  };
  const handleModalSearching = (e) => {
    if (e.target.value) {
      setIsSortedByModal(true);
      setSelectedModal(e.target.value);
    } else {
      setIsSortedByModal(false);
      setSelectedModal("");
    }
    // setIsSortedByPrice(false);
    // priceSelectionEl.current.value = "";
  };

  //Set page title
  useEffect(() => {
    document.title = "Products | Paperman";
  }, []);

  //Set up initial products
  useEffect(() => {
    setRequestedProducts(products);
  }, [products]);

  //Check condition for filter and sorting
  useEffect(() => {
    //there is no sort by model or price
    if (!isSortedByModal && !isSortedByPrice) {
      setRequestedProducts(products);
    }
    //check if sorting
    if (isSortedByModal || isSortedByPrice) {
      //Always check filter by model first
      //If there is a selected model, filter
      if (selectedModal) {
        const tempProducts = products.filter((product) =>
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
          const tempProducts = products.map((product) => product);
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

  //Check on sorting by price
  // useEffect(() => {
  //   if (isSortedByPrice) {
  //     const tempProducts = products.map((product) => product);
  //     if (selectedPriceOrder === "Low to High") {
  //       tempProducts.sort((a, b) => a.price - b.price);
  //       return setRequestedProducts(tempProducts);
  //     } else if (selectedPriceOrder === "High to Low") {
  //       tempProducts.sort((a, b) => b.price - a.price);
  //       return setRequestedProducts(tempProducts);
  //     } else {
  //       setRequestedProducts(tempProducts);
  //     }
  //   }
  // }, [selectedPriceOrder]);

  //Check on sorting by modal
  // useEffect(() => {
  //   if (isSortedByModal) {
  //     if (selectedModal) {
  //       const tempProducts = products.filter((product) =>
  //         product.modals.includes(selectedModal)
  //       );
  //       setRequestedProducts(tempProducts);
  //     } else {
  //       setRequestedProducts(products);
  //     }
  //   }
  // }, [selectedModal]);

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
            ref={priceSelectionEl}
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
            ref={modalSelectionEl}
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
      <Products products={requestedProducts ?? products} />
    </div>
  );
};

export default ProductsPage;
