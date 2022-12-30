import React from "react";
import "./Subtotal.css";
function Subtotal({ price }) {
  return (
    <div className="checkout__subtotal">
      <span className="checkout__price">
        Subtotal (0 item) :
        <strong>
          <small> ₹</small>
          {converttoInd(price)}
        </strong>
      </span>
      <label>
        <input type="checkbox"></input>
        This order contains a gift
      </label>
      <button>Proceed to checkout</button>
    </div>
  );
}
const converttoInd = (val) => {
  let str = val.toString();
  let strdec = str.split(".")[1] || "00";
  if (val <= 999) {
    return val + "." + strdec;
  }
  str = str.split(".")[0];
  let strlast = str.slice(-3);
  str = str.slice(0, -3);
  let strfin = "," + strlast + "." + strdec;
  const recurse = (str1, str2) => {
    if (str1.length > 2) {
      str2 = "," + str1.slice(-2) + str2;
      str1 = str1.slice(0, -2);
      [str1, str2] = recurse(str1, str2);
      return [str1, str2];
    } else {
      return [str1, str1 + str2];
    }
  };
  [str, strfin] = recurse(str, strfin);
  return strfin;
};

export default Subtotal;
