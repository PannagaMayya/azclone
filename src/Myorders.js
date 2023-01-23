import React, { useEffect, useState } from "react";
import "./Myorders.css";
import Myordersitems from "./Myordersitems";
import Loading from "./Loading";
import { db } from "./appFirebase/firebase";
import { collection, getDocs, orderBy } from "firebase/firestore";
import { useStateValue } from "./StateHandler/Stateprovider";
import { useNavigate } from "react-router-dom";
function Myorders() {
  // eslint-disable-next-line
  const history = useNavigate();
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);
  const [cartState, setCartState] = useState([]);

  const ordersref = collection(db, "users", state.user?.uid, "orders");
  useEffect(() => {
    getDocs(ordersref, orderBy("created", "asc")).then((res) => {
      let dbsnap = [];
      res.forEach((e) => {
        dbsnap.push({ [e.id]: e.data() });
      });

      setCartState(dbsnap);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="myorders_container">
      <div className="myorders__title">
        <h1 style={{ fontWeight: "400" }}>Your Orders</h1>
      </div>
      {cartState.length !== 0 ? (
        cartState.map((i, n) => (
          <Myordersitems
            key={n}
            id={Object.keys(i)[0]}
            item={Object.values(i)[0]}
          />
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
