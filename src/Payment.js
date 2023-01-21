import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
import axios from "./response/axios";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ErrorIcon from "@mui/icons-material/Error";
import Checkoutitems from "./Checkoutitems";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateHandler/Stateprovider";
import { priceconvertInd } from "./StateHandler/priceconvertInd";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CircularProgress } from "@mui/material";
function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const history = useNavigate();
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [clientsec, setClientSec] = useState(null);
  const [isFormEdit, setIsFormEdit] = useState(state.address ? false : true);
  const [card, setCard] = useState("CC");
  let deliveryFee = state.cart?.length !== 0 ? 50 : 0;
  const [address, setAddress] = useState(
    state.address
      ? state.address
      : {
          fullname: state.user?.displayName,
          houseno: "",
          city: "",
          state: "",
          phnumber: "",
        }
  );
  const disabledstyle = { opacity: 0.5, pointerEvents: "none" };
  const totalcost = state.cart?.reduce(
    (total, cur) => total + cur.quantity * cur.price,
    0
  );
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const handleFormPayment = async (e) => {
    if (!(isFormEdit || state.cart.length === 0 || err)) {
      setPaymentLoading(true);
      (async () => {
        const resp = await axios({
          method: "post",
          url: `/payments/create?total=${(totalcost + deliveryFee) * 100}`,
        });
        console.log(resp);
        setClientSec(resp.data.clientSecret);

        const payload = await stripe
          .confirmCardPayment(resp.data.clientSecret, {
            payment_method: { card: elements.getElement(CardElement) },
          })
          .then(({ paymentIntents }) => {
            history(`/myorders/${resp.data.clientSecret}`, { replace: true });
          });
      })();
    }
  };
  const onChangeValue = (e) => {
    if (e.target.value === "COD") {
      setErr(null);
      setCard("COD");
    } else {
      elements.getElement(CardElement).clear();
      setCard("CC");
    }
  };
  const handleCard = (e) => {
    e.error ? setErr(e.error.message) : setErr(null);
  };
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
              <h3>1. Delivery addess</h3>
            </div>
            <div className="payment__left__content">
              <p>Email Address: {state.user?.email}</p>

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
              <h3>2. Review order</h3>
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
              <h3>3. Payment Method</h3>
            </div>
            <div className="payment__left__content">
              <div id="paymenttype" className="payment__form">
                <label>
                  <input
                    type="radio"
                    value="CC"
                    name="payment"
                    checked={card === "CC"}
                    onChange={onChangeValue}
                  ></input>
                  <CreditCardIcon style={{ marginRight: "3px" }} />
                  Pay via CC
                </label>

                <label>
                  <input
                    type="radio"
                    name="payment"
                    onChange={onChangeValue}
                    disabled
                  ></input>
                  <AccountBalanceIcon style={{ marginRight: "3px" }} /> Internet
                  Banking
                </label>

                <label>
                  <input
                    type="radio"
                    value="COD"
                    name="payment"
                    checked={card === "COD"}
                    onChange={onChangeValue}
                  ></input>
                  <CurrencyRupeeIcon style={{ marginRight: "3px" }} /> Cash on
                  Delivery
                </label>
                <div style={{ display: card === "CC" ? "block" : "none" }}>
                  <h4 style={{ marginBottom: "10px" }}>Card Details:</h4>
                  <CardElement onChange={handleCard} />
                </div>
                {err && (
                  <div
                    className="payment_error"
                    style={{ color: "red", display: "flex", marginTop: "5px" }}
                  >
                    <ErrorIcon />
                    {err}
                  </div>
                )}
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
      <div className={paymentLoading ? "payment_overlay" : "loading_none"}>
        <CircularProgress
          color="success"
          style={{ position: "absolute", top: "300px" }}
        />
      </div>
    </div>
  );
}

export default Payment;
