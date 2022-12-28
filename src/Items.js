import React from "react";
import "./Items.css";
import Item from "./Item";
function Items() {
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
        </div>
        <div className="Items__right">
          <div className="Items__rightrow">
            <Item
              title="Product 2"
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71hP1JEHDFL._AC_UL480_QL65_.jpg"
              star={2}
              price={399}
              origprice={440}
            />
            <Item
              title="Product 3"
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71hP1JEHDFL._AC_UL480_QL65_.jpg"
              star={3}
              price={699}
              origprice={840}
            />
            <Item
              title="Product 4"
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71hP1JEHDFL._AC_UL480_QL65_.jpg"
              star={4}
              price={300}
              origprice={400}
            />
          </div>
          <div className="Items__rightrow">
            <Item
              title="Product 1"
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71hP1JEHDFL._AC_UL480_QL65_.jpg"
              star={5}
              price={360}
              origprice={380}
            />
            <Item
              title="Product 2"
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71hP1JEHDFL._AC_UL480_QL65_.jpg"
              star={2}
              price={399}
              origprice={410}
            />
            <Item
              title="Product 3"
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71hP1JEHDFL._AC_UL480_QL65_.jpg"
              star={3}
              price={699}
              origprice={720}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
