import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
function Product({ heading, imageUrl, linkText, link }) {
  return (
    <div className="product">
      <div className="product__info">
        <h3 className="product__head">{heading}</h3>

        <div>
          <Link to="/items" className="product__image_link">
            <img src={imageUrl} alt={heading} className="product__image"></img>
          </Link>
        </div>
        <Link to="/items" className="product__Link">
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default Product;
