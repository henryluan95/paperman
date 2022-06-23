import "./Categories.scss";

import React from "react";

const Categories = () => {
  return (
    <div className="categories-sticky__wrapper">
      <div className="categories">
        <section className="category">
          <h4 className="category__title">Shop By Collection</h4>
          <span className="category__option">Mono</span>
          <span className="category__option">Lotus</span>
          <span className="category__option">Zina</span>
          <span className="category__option">Jeff</span>
        </section>
        <section className="category">
          <h4 className="category__title">Shop By Season</h4>
          <span className="category__option">Spring</span>
          <span className="category__option">Summer</span>
          <span className="category__option">Fall</span>
          <span className="category__option">Winter</span>
        </section>
      </div>
    </div>
  );
};

export default Categories;
