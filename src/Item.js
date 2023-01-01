import React from "react";
import "./Item.css";
import Rating from "@mui/material/Rating";
import { priceconvertInd } from "./StateHandler/priceconvertInd";
import { useStateValue } from "./StateHandler/Stateprovider";
function Item({ id, title, image, star, price, origprice }) {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        star: star,
        price: price,
        origprice: origprice,
      },
    });
  };
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
          <strong>{priceconvertInd(price)} </strong>
          <small style={{ textDecoration: "line-through" }}>
            ₹{priceconvertInd(origprice)}
          </small>
          <small>
            {" "}
            ({Math.trunc(((origprice - price) / origprice) * 100)}% off)
          </small>
        </p>
      </div>
      <div className="Item__add">
        <button className="to__cart" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
