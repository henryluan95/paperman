import "./Trending.scss";
import React from "react";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <div className="trending">
      <h2 className="trending__title">Trending</h2>
      <div className="line trending__line"></div>
      <div className="trending__cards">
        {/*single card starts*/}
        <div className="card">
          <div className="card__img-wrapper">
            <Link
              to="/product/HIMA4Dp60FPt03B74ZCR"
              className="card__purchase-btn"
            >
              View Product
            </Link>
            <img
              className="card__trending-img"
              src="https://firebasestorage.googleapis.com/v0/b/paperman-4a7c4.appspot.com/o/case1.jpg?alt=media&token=002d91c8-e962-4d78-8aaa-6cdcaec20a31"
              alt="case pic"
            />
            <img
              className="card__trending-img card__trending-img--hover"
              src="https://firebasestorage.googleapis.com/v0/b/paperman-4a7c4.appspot.com/o/case11.jpg?alt=media&token=21eb3664-55f6-4b83-954d-43523aa6f4e4"
              alt="case pic"
            />
          </div>
          <div className="card__info">
            <span className="card__info-price">$9.99</span>
            <span className="card__info-product">Sparkle Rose</span>
          </div>
        </div>
        {/*single card ends*/}
        {/*single card starts*/}
        <div className="card">
          <div className="card__img-wrapper">
            <Link
              to="/product/bilbJA3sn6fkZYjOpAdG"
              className="card__purchase-btn"
            >
              View Product
            </Link>
            <img
              className="card__trending-img"
              src="https://firebasestorage.googleapis.com/v0/b/paperman-4a7c4.appspot.com/o/case2.jpg?alt=media&token=c48c56e1-02ec-4644-992d-7fcc94a9ee75"
              alt="case pic"
            />
            <img
              className="card__trending-img card__trending-img--hover"
              src="https://firebasestorage.googleapis.com/v0/b/paperman-4a7c4.appspot.com/o/case22.jpg?alt=media&token=234f262c-eb2d-41b0-aed5-71d4b3a22947"
              alt="case pic"
            />
          </div>
          <div className="card__info">
            <span className="card__info-price">$11.99</span>
            <span className="card__info-product">Cute Store</span>
          </div>
        </div>
        {/*single card ends*/}
        {/*single card starts*/}
        <div className="card">
          <div className="card__img-wrapper">
            <Link
              to="/product/GPCrvxAVyL9fQFgzKlTP"
              className="card__purchase-btn"
            >
              View Product
            </Link>
            <img
              className="card__trending-img"
              src="https://firebasestorage.googleapis.com/v0/b/paperman-4a7c4.appspot.com/o/case3.jpg?alt=media&token=5f2614ab-41ad-4cda-9d10-f3c4c5a3ecde"
              alt="case pic"
            />
            <img
              className="card__trending-img card__trending-img--hover"
              src="https://firebasestorage.googleapis.com/v0/b/paperman-4a7c4.appspot.com/o/case33.jpg?alt=media&token=a7c3b0ab-feb1-4133-8630-4dc4b6357980"
              alt="case pic"
            />
          </div>
          <div className="card__info">
            <span className="card__info-price">$9.99</span>
            <span className="card__info-product">Green Vibe</span>
          </div>
        </div>
        {/*single card ends*/}
      </div>
    </div>
  );
};

export default Trending;
