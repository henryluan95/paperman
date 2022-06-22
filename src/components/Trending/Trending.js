import "./Trending.scss";
import React from "react";
import trendingImage1 from "../../assets/images/case1.jpg";
import trendingImage2 from "../../assets/images/case2.jpg";
import trendingImage3 from "../../assets/images/case3.jpg";
import trendingImage11 from "../../assets/images/case11.jpg";
import trendingImage22 from "../../assets/images/case22.jpg";
import trendingImage33 from "../../assets/images/case33.jpg";

const Trending = () => {
  return (
    <div className="trending">
      <h2 className="trending__title">Trending</h2>
      <div className="trending__line"></div>
      <div className="trending__cards">
        {/*single card starts*/}
        <div className="card">
          <div className="card__img-wrapper">
            <div className="card__purchase-btn">View Product</div>
            <img
              className="card__trending-img"
              src={trendingImage1}
              alt="case pic"
            />
            <img
              className="card__trending-img card__trending-img--hover"
              src={trendingImage11}
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
            <div className="card__purchase-btn">View Product</div>
            <img
              className="card__trending-img"
              src={trendingImage2}
              alt="case pic"
            />
            <img
              className="card__trending-img card__trending-img--hover"
              src={trendingImage22}
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
            <div className="card__purchase-btn">View Product</div>
            <img
              className="card__trending-img"
              src={trendingImage3}
              alt="case pic"
            />
            <img
              className="card__trending-img card__trending-img--hover"
              src={trendingImage33}
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
