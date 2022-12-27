import React from "react";
import "./Product.css";
function Product({ heading, imageUrl, linkText, link }) {
  return (
    <div className="product">
      <div className="product__info">
        <h3 className="product__head">{heading}</h3>
      </div>
      <img src={imageUrl} alt={heading} className="product__image"></img>
      <div className="product__Link">
        <a className="product__Link" href={link}>
          {linkText}
        </a>
      </div>
    </div>
  );
}

export default Product;
