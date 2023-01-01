import React from "react";
import "./Checkoutitems.css";
function Checkoutitems({ id, image, title, quantity, price }) {
  return (
    <div className="checkout__items_container">
      <div className="checkout__items_left">
        <div className="checkout__items_left_image">
          <img src={image} alt={title}></img>
        </div>
        <div className="checkout__items_left_info">
          <h3>{title}</h3>
          <div className="checkout__items_left_actions">
            <div className="checkout__itemsquantity">
              <span>Qty: </span>
              <select value={quantity}>
                <option value={quantity}>{quantity}</option>
                {Array(9)
                  .fill()
                  .map((cur, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
              </select>
            </div>
            <div className="checkout__itemsdelete">Delete</div>
            <div className="checkout__itemssave">Save for Later</div>
          </div>
        </div>
      </div>
      <div className="checkout__items_right">
        <h4>
          <small>₹ </small>
          {price}
        </h4>
      </div>
    </div>
  );
}

export default Checkoutitems;
