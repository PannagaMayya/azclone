import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/31/img16/GiftCards/ShopWithPoints/PC_Sliced_01_revised.jpg"
          alt="ad_banner"
          className="checkout__banner"
        ></img>
        <div className="checkout__cartdetails">
          <div className="checkout__title">
            <h3>Shopping Cart</h3>
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal price="100099" />
      </div>
    </div>
  );
}

export default Checkout;
