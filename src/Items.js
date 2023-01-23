import React from "react";
import "./Items.css";
import Item from "./Item";

function Items() {
  const itemslist = [
    {
      id: "29002",
      title:
        "Arpon Brand - Olicat Xxl Bean Bag Filled With Beans (Black)(Faux Leather)",
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71EvYTPqjQL._AC_UL480_FMwebp_QL65_.jpg",
      star: 2,
      price: 899,
      origprice: 1299,
    },
    {
      id: "45361",
      title:
        "Jurio USB Wired Gaming Mouse D1 Black, LED Backlight up to 3200 DPI, Ergonomic Design for Laptop & PC",
      image: "https://m.media-amazon.com/images/I/410KqOI+IeL._SX679_.jpg",
      star: 3,
      price: 699,
      origprice: 840,
    },
    {
      id: "40928",
      title: "AppIe Z-Mac with 4K Display (15 inches/39.6cm, Silver)",
      image: "https://m.media-amazon.com/images/I/710AOd78HAL._SX679_.jpg",
      star: 4,
      price: 123999,
      origprice: 129000,
    },
    {
      id: "11110",
      title: "Hario Blocka 4G Mobile (Black, 1)",
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41xqwHBCw1L._AC_UL480_FMwebp_QL65_.jpg",
      star: 5,
      price: 8499,
      origprice: 10000,
    },
    {
      id: "51829",
      title:
        "Giret Ironing Board/Iron Table Stand with Press Holder, Foldable & Height Adjustable/Ironing Board Covers (Grey)",
      image: "https://m.media-amazon.com/images/I/514yK1ukLHL._SX679_.jpg",
      star: 2,
      price: 399,
      origprice: 410,
    },
    {
      id: "61526",
      title:
        "Kito Washable Mask with Melt Blown Layer, Adjustable Ear Loop & Nose Pin | Free Ear Saver Strap For Men & Women-Pack of 2",
      image: "https://m.media-amazon.com/images/I/711foChZnAL._SX679_.jpg",
      star: 4,
      price: 299,
      origprice: 500,
    },
    {
      id: "70192",
      title:
        "Premium Yoga Mat, Friendly Non Slip Yoga Mat (Crimson Red & Black)",
      image:
        "https://m.media-amazon.com/images/I/71d9TZOfrML._AC_UL480_FMwebp_QL65_.jpg",
      star: 4,
      price: 1299,
      origprice: 1500,
    },
    {
      id: "89012",
      title:
        "Astronaut Costume Dress Up Clothes Space Fancy Jumpsuit Cosplay Onesie Costume",
      image: "https://m.media-amazon.com/images/I/61HeLo+S0+L._UY879_.jpg",
      star: 3,
      price: 3299,
      origprice: 4500,
    },
    {
      id: "99012",
      title: "RORO Men's Solid Cotton Zipper Hoodies",
      image: "https://m.media-amazon.com/images/I/61+8bVgNxjL._UX679_.jpg",
      star: 4,
      price: 799,
      origprice: 900,
    },
    {
      id: "06524",
      title:
        "Bluetooth Wireless in Ear Earphones with Mic, 12.4 Mm Drivers, 10 Mins Charge , 30 Hrs Battery Life (Black)",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/51UhwaQXCpL._AC_UL675_SR675,480_.jpg",
      star: 3,
      price: 1799,
      origprice: 2500,
    },
    {
      id: "82200",
      title: "Mens Giga-g5 Running Shoes",

      image:
        "https://m.media-amazon.com/images/I/81Hb5hdgOoL._AC_UL480_FMwebp_QL65_.jpg",
      star: 5,
      price: 999,
      origprice: 1500,
    },
    {
      id: "75541",
      title:
        "Smart Watch with Bluetooth Calling ,120+ Sports Modes, High Res with SpO2, Heart Rate Monitoring & IP67 Rating",
      image:
        "https://m.media-amazon.com/images/I/718pWEv++fL._AC_UL480_QL65_.jpg",
      star: 4,
      price: 1999,
      origprice: 3000,
    },
  ];
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
          {itemslist.map((cur, i) => (
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
