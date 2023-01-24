import React, { useEffect, useState } from "react";
import "./Items.css";
import Item from "./Item";
import data from "./itemslist.json";
import { useStateValue } from "./StateHandler/Stateprovider";
function Items() {
  const [state, dispatch] = useStateValue();
  const [localstate, setLocalState] = useState(data.data.itemslist);
  useEffect(() => {
    console.log(state, localstate);
  }, []);
  return (
    <>
      <div className="Items__banner">
        <img
          src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"
          alt="Items_banner"
        ></img>
      </div>
      <div className="Items">
        <div className="Items__left">
          <h4>Category</h4>
          <p>Mobiles & Accessories</p>
          <p>Grocery & Gourmet Foods</p>
          <p>Home & Kitchen</p>
          <p>Books</p>
          <p>Wearable Technology</p>
          <p>School Supplies</p>
          <p>Cameras & Photography</p>
        </div>
        <div className="Items__right">
          {state.search.length > 0
            ? state.search.map((cur, i) => (
                <Item
                  key={cur.id}
                  id={cur.id}
                  title={cur.title}
                  image={cur.image}
                  star={cur.star}
                  price={cur.price}
                  origprice={cur.origprice}
                />
              ))
            : localstate.map((cur, i) => (
                <Item
                  key={cur.id}
                  id={cur.id}
                  title={cur.title}
                  image={cur.image}
                  star={cur.star}
                  price={cur.price}
                  origprice={cur.origprice}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default Items;
