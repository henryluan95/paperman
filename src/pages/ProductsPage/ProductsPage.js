import "./ProductsPage.scss";
import React, { useEffect, useState } from "react";
import Products from "../../components/Products/Products";
import { productsColRef } from "../../firebase";
import useCollection from "../../hooks/useCollection";
import Loader from "../../components/Loader/Loader";

const ProductsPage = () => {
  const [isSortedByPrice, setIsSortedByPrice] = useState(false);
  const [isSortedBySearch, setIsSortedBySearch] = useState(false);
  const [isSortedByModal, setIsSortedByModal] = useState(false);
  const [selectedPriceOrder, setSelectedPriceOrder] = useState("");
  const [selectedModal, setSelectedModal] = useState("");
  const { products, loading } = useCollection(productsColRef);
  const [requestedProducts, setRequestedProducts] = useState(null);

  //Create functions to track sorting methods
  const handlePriceSorting = (e) => {
    setIsSortedByPrice(true);
    setIsSortedBySearch(false);
    setIsSortedByModal(false);
    setSelectedPriceOrder(e.target.value);
  };
  const handleModalSearching = (e) => {
    setIsSortedByModal(true);
    setIsSortedByPrice(false);
    setIsSortedBySearch(false);
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
        console.log(tempProducts);
        return setRequestedProducts(tempProducts);
      } else if (selectedPriceOrder === "High to Low") {
        tempProducts.sort((a, b) => b.price - a.price);
        return setRequestedProducts(tempProducts);
      } else {
        setRequestedProducts(tempProducts);
      }
    }
  }, [selectedPriceOrder]);

  if (loading) {
    return <Loader />;
  }

  console.log(products);

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
        {/* search */}
        <label className="view__search">
          <input
            type="text"
            className="input view__search-input"
            placeholder="Search"
          />
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
            <option className="product-detail__modal-option" value="Iphone 7">
              Iphone 7
            </option>
            <option
              className="product-detail__modal-option"
              value="Iphone 7 Plus"
            >
              Iphone 7 Plus
            </option>
            <option className="product-detail__modal-option" value="Iphone X">
              Iphone X
            </option>
            <option
              className="product-detail__modal-option"
              value="Iphone 12 Pro"
            >
              Iphone 12 Pro
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
