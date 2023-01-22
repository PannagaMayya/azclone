import React from "react";
import "./Myorderitems.css";
import { priceconvertInd } from "./StateHandler/priceconvertInd";
function Myordersitems({ id, item }) {
  return (
    <div className="myorders_card" id={id}>
      <div className="myorderscard__header">
        <div className="myorders__header__childern">
          <div className="myorders__header__childern__line1">
            ORDER PLACED ON
          </div>
          <div className="myorders__header__childern__line2">
            {new Date(item.created * 1000).toUTCString()}
          </div>
        </div>
        <div className="myorders__header__childern">
          <div className="myorders__header__childern__line1">TOTAL AMOUNT</div>
          <div className="myorders__header__childern__line2">
            <small>₹ </small>
            {priceconvertInd(item.amount / 100)}
          </div>
        </div>
        <div className="myorders__header__childern">
          <div className="myorders__header__childern__line1">ORDER ID</div>
          <div className="myorders__header__childern__line2">{id}</div>
        </div>
      </div>
      {item.cart.map((cur, ind) => (
        <div className="myorderscard__body">
          <div className="myorderscard__body_left">
            <img src={cur.image} alt="order"></img>
          </div>
          <div className="myorderscard__body_right">
            <h4>{cur.title}</h4>
            <span>
              <small style={{ color: "#565959" }}>Qty: </small>
              {cur.quantity}
            </span>
            <span>
              <small style={{ color: "#565959" }}>Amount: </small>
              <small>₹ </small>
              {priceconvertInd(cur.price)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Myordersitems;
