import React from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
import Checkoutitems from "./Checkoutitems";
import { useStateValue } from "./StateHandler/Stateprovider";
import { priceconvertInd } from "./StateHandler/priceconvertInd";
function Payment() {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  const disbledstyle = { opacity: 0.5, pointerEvents: "none" };
  const totalcost = state.cart?.reduce(
    (total, cur) => total + cur.quantity * cur.price,
    0
  );
  return (
    <div className="payment">
      <div className="payment__header">
        <Link to="/" className="payment__logo">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
            alt="amazonlogo"
          ></img>
        </Link>
        <h2 style={{ fontWeight: 500, textAlign: "center", flex: "0.8" }}>
          Checkout
        </h2>
      </div>
      <div className="payment__container">
        <div className="payment__left">
          <div className="payment__address">
            <div className="payment__left__title">
              <h3>1 Delivery addess</h3>
            </div>
            <div className="payment__left__content">
              <p>{state.user?.displayName}</p>
              <p>{state.user?.email}</p>
            </div>
          </div>
          <div className="payment__review" style={false ? {} : disbledstyle}>
            <div className="payment__left__title">
              <h3>2 Review order</h3>
            </div>
            <div className="payment__left__content">
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
          <div className="payment__payment" style={false ? {} : disbledstyle}>
            <div className="payment__left__title">
              <h3>3 Payment Method</h3>
            </div>
            <div className="payment__left__content">
              <label>
                <input type="radio"></input>
                Pay via CC
              </label>

              <label>
                <input type="radio" disabled></input>
                Internet Banking
              </label>

              <label>
                <input type="radio"></input>
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>
        <div className="payment__right">
          <div
            className="order__summary__container"
            style={false ? {} : disbledstyle}
          >
            <div className="order__summary__top">
              <button className="payment__button">
                Use this payment method
              </button>
              <small>
                Choose a payment method to continue checking out. You'll still
                have a chance to review your order
              </small>
            </div>
            <div className="order__summary__bottom">
              <h3>Order Summary</h3>
              <span>
                <small>Items cost:</small>
                <small>₹{priceconvertInd(totalcost)}</small>
              </span>
              <span>
                <small>Delivery fee:</small>
                <small>₹50.00</small>
              </span>
              <span>
                <small>Total:</small>
                <small>₹{priceconvertInd(totalcost + 50)}</small>
              </span>

              <span
                style={{
                  color: "#bc4040",
                  margin: "10px 0",
                  padding: "10px 0",
                  borderTop: "1px solid #ddd",
                }}
              >
                <h3>Order Total:</h3>
                <h3>₹{priceconvertInd(totalcost + 50)}</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
