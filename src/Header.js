import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useStateValue } from "./StateHandler/Stateprovider";
import { Link } from "react-router-dom";

function Header() {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
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
            Hello
          </span>
          <span className="header__optionline2">
            <LocationOnIcon className="header__locationzone" />
            Select Your address
          </span>
        </div>
      </div>
      <div className="header__search">
        <select className="header__search_select" value="All">
          <option value="All">All</option>
          <option value="Alexa Skills">Alexa Skills</option>
          <option value="Gift Cards">Gift Cards</option>
        </select>
        <input className="header__search_inp" type="text" />
        <SearchIcon className="header__searchlogo" />
      </div>
      <div className="header__child">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="header__option">
            <span className="header__optionline1">Hello, sign in</span>
            <span className="header__optionline2">Account & Lists</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionline1">Returns</span>
          <span className="header__optionline2">& Orders</span>
        </div>
        <Link to="/checkout">
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
