import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
import Checkoutitems from "./Checkoutitems";
import { useStateValue } from "./StateHandler/Stateprovider";
import { priceconvertInd } from "./StateHandler/priceconvertInd";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  const [isFormEdit, setIsFormEdit] = useState(state.address ? false : true);
  const [card, setCard] = useState(false);
  let deliveryFee = state.cart?.length !== 0 ? 50 : 0;
  const [address, setAddress] = useState(
    state.address
      ? state.address
      : { fullname: "", houseno: "", city: "", state: "", phnumber: "" }
  );
  const disabledstyle = { opacity: 0.5, pointerEvents: "none" };
  const totalcost = state.cart?.reduce(
    (total, cur) => total + cur.quantity * cur.price,
    0
  );
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const handleFormPayment = (e) => {};
  const onChangeValue = (e) => {
    console.log(e.target.value);
  };
  const handleCard = (e) => {};
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
              <form
                id="address_form"
                onSubmit={(e) => {
                  e.preventDefault();

                  if (isFormEdit) {
                    console.log("Dispatch" + isFormEdit);
                    dispatch({ type: "SET_ADDRESS", address });
                  }
                  setIsFormEdit(!isFormEdit);
                }}
                className="address__form"
              >
                <fieldset disabled={!isFormEdit}>
                  <label>
                    <strong>Full name</strong>
                  </label>
                  <input
                    type="text"
                    minLength="3"
                    maxLength="15"
                    name="fullname"
                    value={address.fullname}
                    onChange={handleChange}
                    required
                  ></input>
                  <label>
                    <strong>
                      Flat, House no., Building, Company, Apartment
                    </strong>
                  </label>
                  <input
                    type="text"
                    minLength="3"
                    maxLength="10"
                    name="houseno"
                    value={address.houseno}
                    onChange={handleChange}
                    required
                  ></input>

                  <label>
                    <strong>Town/City</strong>
                  </label>
                  <input
                    type="text"
                    minLength="3"
                    maxLength="15"
                    name="city"
                    value={address.city}
                    onChange={handleChange}
                    required
                  ></input>

                  <label>
                    <strong>State</strong>
                  </label>
                  <input
                    type="text"
                    minLength="3"
                    maxLength="15"
                    name="state"
                    value={address.state}
                    onChange={handleChange}
                    required
                  ></input>

                  <label>
                    <strong>Phone Number</strong>
                  </label>
                  <input
                    type="tel"
                    name="phnumber"
                    value={address.phnumber}
                    onChange={handleChange}
                    required
                  ></input>
                </fieldset>
              </form>
            </div>
            <div className="payment__editsave">
              <input
                type="submit"
                form="address_form"
                value={!isFormEdit ? "Edit" : "Save"}
              ></input>
            </div>
          </div>
          <div className="payment__review">
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
          <div
            className="payment__payment"
            style={!isFormEdit && state.cart.length !== 0 ? {} : disabledstyle}
          >
            <div className="payment__left__title">
              <h3>3 Payment Method</h3>
            </div>
            <div className="payment__left__content">
              <div className="payment__form" onChange={onChangeValue}>
                <label>
                  <input type="radio" value="CC" name="payment"></input>
                  Pay via CC
                </label>

                <label>
                  <input type="radio" name="payment" disabled></input>
                  Internet Banking
                </label>

                <label>
                  <input type="radio" value="COD" name="payment"></input>
                  Cash on Delivery
                </label>
                <div style={{ display: card ? "block" : "none" }}>
                  <h4 style={{ marginBottom: "10px" }}>Card Details:</h4>
                  <CardElement onChange={handleCard} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="payment__right">
          <div className="order__summary__container">
            <div className="order__summary__top">
              <button
                className="payment__button"
                disabled={!(!isFormEdit && state.cart.length)}
                onClick={handleFormPayment}
              >
                Use this payment method
              </button>
              <small>
                Choose a payment method to continue checking out. You can still
                modify your order
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
                <small>₹{deliveryFee}.00</small>
              </span>
              <span>
                <small>Total:</small>
                <small>₹{priceconvertInd(totalcost + deliveryFee)}</small>
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
                <h3>₹{priceconvertInd(totalcost + deliveryFee)}</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
