import React, { useEffect, useState } from "react";
import "./Myorders.css";
import Myordersitems from "./Myordersitems";
import { db } from "./appFirebase/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useStateValue } from "./StateHandler/Stateprovider";
import { useNavigate } from "react-router-dom";
function Myorders() {
  const history = useNavigate();
  const [state, dispatch] = useStateValue();
  const [cartState, setCartState] = useState([]);
  const addressref = doc(
    db,
    "users",
    state.user?.uid,
    "address",
    state.user?.uid
  );
  const ordersref = collection(db, "users", state.user?.uid, "orders");
  useEffect(() => {
    /*getDoc(addressref).then((res) => {
      console.log(res.data());
      if (res.data()) {
        console.log("Inside");
        let address = res.data();
        console.log(address);
        dispatch({ type: "SET_ADDRESS", address: address.address });
      }
    });*/

    getDocs(ordersref).then((res) => {
      let dbsnap = [];
      res.forEach((e) => {
        dbsnap.push({ [e.id]: e.data() });
      });
      console.log(dbsnap);
      setCartState(dbsnap);
    });
  }, []);

  return (
    <div className="myorders_container">
      <div className="myorders__title">
        <h1 style={{ fontWeight: "400" }}>Your Orders</h1>
      </div>
      {cartState.length !== 0 ? (
        cartState.map((i, n) => (
          <Myordersitems id={Object.keys(i)[0]} item={Object.values(i)[0]} />
        ))
      ) : (
        <div className="cart__empty">
          <h1 style={{ fontWeight: "300" }}>No orders.</h1>
        </div>
      )}
    </div>
  );
}

export default Myorders;
