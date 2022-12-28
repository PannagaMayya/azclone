import React from "react";
import "./Item.css";
import Rating from "@mui/material/Rating";
function Item({ title, image, star, price, origprice }) {
  return (
    <div className="Item">
      <img src={image} alt={title}></img>
      <div className="Item__info">
        <p className="Item__title">{title}</p>
        <p className="Item__stars">
          {star}
          <Rating name="read-only" value={star} readOnly />
        </p>
        <p className="Item__price">
          <small>₹ </small>
          <strong>{price} </strong>
          <small style={{ textDecoration: "line-through" }}>₹{origprice}</small>
          <small>
            {" "}
            ({Math.trunc(((origprice - price) / origprice) * 100)}% off)
          </small>
        </p>
      </div>
      <div className="Item__add">
        <button className="to__cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
