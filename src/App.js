//import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Items from "./Items";
import Login from "./Login";
import Signup from "./Signup";
import Payment from "./Payment";
import NavigateComp from "./NavigateComp";
import Myorders from "./Myorders";
import { useStateValue } from "./StateHandler/Stateprovider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth, manageuser } from "./appFirebase/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51MOPksSJ8ogpUCK4l6W3tOA3h8lkA6CI4B44yAG2eBPBp0tZhGRVbb5Q0QOcPoEn84NWS4d1QX7OKPYFCIslIHdw00pRamSW7o"
);
function App() {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    manageuser(auth, (user) => {
      if (user) {
        console.log(user.displayName);
        dispatch({ type: "SET_USER", user: user });
        //dispatch({type:"GET_ADDRESS",address:""})
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/login"
            element={
              <NavigateComp comp={<Login />} user={state.user ? true : false} />
            }
          />
          <Route
            path="/register"
            element={
              <NavigateComp
                comp={<Signup />}
                user={state.user ? true : false}
              />
            }
          />
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <NavigateComp
                  comp={<Payment />}
                  user={state.user ? false : true}
                />
              </Elements>
            }
          />
          <Route
            path="/items"
            element={
              <>
                <Header />
                <Items />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/myorders"
            element={
              <NavigateComp
                comp={
                  <>
                    <Header />
                    <Myorders />
                  </>
                }
                user={state.user ? false : true}
              />
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
