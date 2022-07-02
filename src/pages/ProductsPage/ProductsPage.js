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
    setIsSortedByPrice(true);
    setIsSortedByModal(false);
    setSelectedPriceOrder(e.target.value);
    console.log(modalSelectionEl.current);
    modalSelectionEl.current.value = "";
  };
  const handleModalSearching = (e) => {
    setIsSortedByModal(true);
    setIsSortedByPrice(false);
    setSelectedModal(e.target.value);
    priceSelectionEl.current.value = "";
  };

  //Set up initial products
  useEffect(() => {
    setRequestedProducts(products);
  }, [products]);

  //Check on sorting by price
  useEffect(() => {
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
  }, [selectedPriceOrder]);

  //Check on sorting by modal
  useEffect(() => {
    if (isSortedByModal) {
      if (selectedModal) {
        const tempProducts = products.filter((product) =>
          product.modals.includes(selectedModal)
        );
        setRequestedProducts(tempProducts);
      } else {
        setRequestedProducts(products);
      }
    }
  }, [selectedModal]);

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
