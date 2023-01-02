import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Checkoutitems from "./Checkoutitems";
import { priceconvertInd } from "./StateHandler/priceconvertInd";
import { useStateValue } from "./StateHandler/Stateprovider";
function Checkout() {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();

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
          <div className="checkout__items">
            {state.cart.length !== 0 ? (
              state.cart.map((i, n) => (
                <Checkoutitems
                  id={i.id}
                  image={i.image}
                  title={i.title}
                  quantity={i.quantity}
                  price={priceconvertInd(i.price)}
                />
              ))
            ) : (
              <div className="cart__empty">
                <h1 style={{ fontWeight: "300" }}>Your Cart is empty.</h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal
          itemcount={state.cart?.reduce(
            (total, cur) => total + cur.quantity,
            0
          )}
          price={priceconvertInd(
            state.cart?.reduce(
              (total, cur) => total + cur.quantity * cur.price,
              0
            )
          )}
        />
      </div>
    </div>
  );
}

export default Checkout;
