import "./Trending.scss";

import React from "react";

const Trending = () => {
  return (
    <div className="trending-container">
      <h2 className="trending-header">Trending</h2>
      <div className="trending-line"></div>
      <div className="trending-cards">
        {/*single card starts*/}
        <div className="card">
          <div className="img">
            <div className="purchase-btn">Add To Bag</div>
            <div className="trending-img">
              <img src="./Asset/case1.jpg" alt="case pic" />
            </div>
            <div className="trending-img-hover">
              <img src="./Asset/case11.jpg" alt="case pic" />
            </div>
          </div>
          <div className="trending-info">
            <span className="trending-price">$9.99</span>
            <span className="trending-product-name">Sparkle Rose</span>
          </div>
        </div>
        {/*single card ends*/}
        {/*single card starts*/}
        <div className="card">
          <div className="img">
            <div className="purchase-btn">Add To Bag</div>
            <div className="trending-img">
              <img src="./Asset/case2.jpg" alt="case pic" />
            </div>
            <div className="trending-img-hover">
              <img src="./Asset/case22.jpg" alt="case pic" />
            </div>
          </div>
          <div className="trending-info">
            <span className="trending-price">$11.99</span>
            <span className="trending-product-name">Cute Store</span>
          </div>
        </div>
        {/*single card ends*/}
        {/*single card starts*/}
        <div className="card">
          <div className="img">
            <div className="purchase-btn">Add To Bag</div>
            <div className="trending-img">
              <img src="./Asset/case3.jpg" alt="case pic" />
            </div>
            <div className="trending-img-hover">
              <img src="./Asset/case33.jpg" alt="case pic" />
            </div>
          </div>
          <div className="trending-info">
            <span className="trending-price">$9.99</span>
            <span className="trending-product-name">Green Vibe</span>
          </div>
        </div>
        {/*single card ends*/}
      </div>
    </div>
  );
};

export default Trending;
