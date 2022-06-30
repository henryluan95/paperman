import "./ProductDetail.scss";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

const ProductDetail = ({ product, addProduct }) => {
  const [selectedModal, setSelectedModal] = useState("");
  const [modalSelectionError, setModalSelectionError] = useState(false);
  //get all the modals that is available for this product
  const modals = [...new Set(product.modals?.map((modal) => modal))];

  //Create a function to update like
  const updateProduct = () => {
    const docRef = doc(db, "products", product.id);
    updateDoc(docRef, {
      isLiked: !product.isLiked,
    });
  };

  //Create a function to keep track of selected modal
  const handleModalSelect = (e) => {
    setSelectedModal(e.target.value);
  };

  //Create a function to validate model select
  const isModalSelected = () => {
    if (!selectedModal) {
      return setModalSelectionError(true);
    }
    return setModalSelectionError(false);
  };

  return (
    <div className="product-detail">
      <img
        className="product-detail__img"
        src={product.image}
        alt="selected product"
      />
      <div className="product-detail__info">
        <h3 className="product-detail__title">{product.title}</h3>
        <span className="product-detail__price">${product.price}</span>

        <button
          className={`button product-detail__buttons-like ${
            product.isLiked ? "product-detail__buttons-like--liked" : ""
          } `}
          onClick={updateProduct}
        >
          {product.isLiked ? "Liked" : "Like"}
        </button>

        <label className="product-detail__promo">
          Promo Code
          <input
            className="input product-detail__promo-input"
            type="text"
            placeholder="Enter Promo Code"
          />
        </label>
        <label className="product-detail__modals">
          Phone Model
          <select
            className="input product-detail__modal"
            name="modal"
            id="modal"
            onChange={handleModalSelect}
          >
            <option className="product-detail__modal-option" value="">
              --Please choose a phone model--
            </option>
            {/* map through all modals variable created above to create options */}
            {modals.map((modal) => (
              <option
                className="product-detail__modal-option"
                value={modal}
                key={modal}
              >
                {modal}
              </option>
            ))}
          </select>
          {modalSelectionError && (
            <span className="selection-error">Please select a model</span>
          )}
        </label>
        <button
          className="button product-detail__buttons-add"
          onClick={() => {
            addProduct(product, selectedModal);
            isModalSelected();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
