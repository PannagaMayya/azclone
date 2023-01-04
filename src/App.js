//import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Items from "./Items";
import Login from "./Login";
import Signup from "./Signup";
import { useStateValue } from "./StateHandler/Stateprovider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth, manageuser } from "./appFirebase/firebase";
function App() {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    manageuser(auth, (user) => {
      if (user) {
        console.log(user.displayName);
        dispatch({ type: "SET_USER", user: user.displayName });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
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
