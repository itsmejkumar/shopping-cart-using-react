import React from "react";
import PropTypes from "prop-types";
export const Product = ({ data }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img className="product-img" src={`${data.productImg}`} alt={``} />
      </div>
      <div className="product-info">
        <h6>
          {data.productName}&nbsp;({`$${data.productAmount}`})
        </h6>
        <div>
          <span className={`product-increment-decrement`}>+</span>
          <span className={`product-count`}>100</span>
          <span className={`product-increment-decrement`}>-</span>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  data: PropTypes.object,
};

Product.defaultProps = {
  data: {
    productName: "Sample Product",
    productDescription: "This is the description of the sample product.",
    productImg: "",
  },
};
