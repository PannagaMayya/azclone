import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Search from "./Search";
import { searchitemtoList } from "./StateHandler/searchitemtoList";
import { useStateValue } from "./StateHandler/Stateprovider";
import { Link, useNavigate } from "react-router-dom";
import { auth, signout } from "./appFirebase/firebase";

function Header() {
  const history = useNavigate();
  const [state, dispatch] = useStateValue();
  const [search, setSearch] = useState("");
  const [selectCat, setSelectCat] = useState("All");
  const logout = () => {
    signout(auth)
      .then(() => {
        console.log("Sign out Successfull");
        history("/login");
        dispatch({
          type: "SIGN_OUT",
          stateclear: { cart: [], user: null, address: null, search: null },
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const searchPopOver = (prop) => {
    if (document.getElementById("searchpopover")) {
      document.getElementById("searchpopover").style.display = prop;
    }
  };
  const setSearchtitle = (val) => {
    dispatch({ type: "SEARCH_ITEM", val: [val] });
    history("/items");
    setSearch(val.title);
  };
  return (
    <div className="header">
      <Link
        to="/"
        onClick={() => {
          dispatch({
            type: "SEARCH_ITEM",
            val: searchitemtoList(""),
          });
          setSearch("");
        }}
      >
        <div className="header__logo">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazonlogo"
          ></img>
        </div>
      </Link>
      <div className="header__child">
        <div className="header__option">
          <span
            className="header__optionline1"
            style={{ marginLeft: "25px", marginBottom: "-8px" }}
          >
            {state.address ? "Deliver to " + state.address.fullname : "Hello"}
          </span>
          <span className="header__optionline2">
            <LocationOnIcon className="header__locationzone" />
            {state.address ? state.address.city : "Select Your address"}
          </span>
        </div>
      </div>
      <div className="header__search">
        <select
          className="header__search_select"
          value={selectCat}
          onChange={(e) => setSelectCat(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Alexa Skills">Alexa Skills</option>
          <option value="Gift Cards">Gift Cards</option>
        </select>
        <input
          className="header__search_inp"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onBlur={(e) => {
            setTimeout(() => {
              searchPopOver("none");
            }, 1000);
          }}
          onFocus={(e) => {
            searchPopOver("block");
          }}
        />
        <div className="searchpopover" id="searchpopover">
          <Search searchitem={search} setSearchtitle={setSearchtitle} />
        </div>
        <Link
          to="/items"
          className="header__searchlogo"
          onClick={() => {
            dispatch({
              type: "SEARCH_ITEM",
              val: searchitemtoList(search),
            });
          }}
        >
          <SearchIcon />
        </Link>
      </div>
      <div className="header__child">
        <div className="header__option divpop">
          <span className="header__optionline1 ">
            {state.user?.displayName
              ? "Hello, " + state.user?.displayName.split(" ")[0]
              : "Hello, sign in"}
          </span>
          <span className="header__optionline2">Account & Lists</span>
          <div className="popover">
            <div>
              <Link to={!state.user && "/login"}>
                <button
                  className="popover__button"
                  onClick={state.user ? logout : () => {}}
                >
                  {state.user ? "Sign Out" : "Sign In"}
                </button>
              </Link>
            </div>
            <div className="popover__area">
              <div className="popover__left">
                <h3>Your Account</h3>
                <p>Your Account</p>
                <p>Your Orders</p>
                <p>Your Wish List</p>
                <p>Your Recommendations</p>
                <p>Your Prime Membership</p>
                <p>Your Prime Video</p>
              </div>
              <div className="popover__right">
                <h3>Your Orders</h3>
                <p>Create a Wish List</p>
                <p>Wish from Any Website</p>
                <p>Baby Wishlist</p>
                <p>Discover Your Style</p>
                <p>Explore Showroom</p>
              </div>
            </div>
          </div>
        </div>
        <Link
          to={state.user ? "/myorders" : "/login"}
          style={{ textDecoration: "none" }}
          onClick={() => {
            dispatch({
              type: "SEARCH_ITEM",
              val: searchitemtoList(""),
            });
            setSearch("");
          }}
        >
          <div className="header__option">
            <span className="header__optionline1">Returns</span>
            <span className="header__optionline2">& Orders</span>
          </div>
        </Link>
        <Link
          to="/checkout"
          style={{ textDecoration: "none" }}
          onClick={() => {
            dispatch({
              type: "SEARCH_ITEM",
              val: searchitemtoList(""),
            });
            setSearch("");
          }}
        >
          <div className="header__cart">
            <ShoppingCartIcon className="header__shoppingcartlogo" />
            <span className="header__optionline2 header__shoppingtemcount">
              {state.cart?.reduce((total, cur) => total + cur.quantity, 0)}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
