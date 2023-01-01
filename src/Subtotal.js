import React from "react";
import "./Subtotal.css";

function Subtotal({ itemcount, price }) {
  return (
    <div className="checkout__subtotal">
      <span className="checkout__price">
        Subtotal ({itemcount || 0} {itemcount === 1 ? "item" : "items"}) :
        <strong>
          <small> ₹</small>
          {price}
        </strong>
      </span>
      <label>
        <input type="checkbox" /> This order contains a gift
      </label>
      <button className="checkout__proceedtobuy">Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
