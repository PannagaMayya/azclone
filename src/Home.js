import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  const [ind, setInd] = useState(0);
  useEffect(() => {
    let tmid = setTimeout(() => {
      setInd(ind === 2 ? 0 : ind + 1);
    }, 5000);
    return () => {
      clearTimeout(tmid);
    };
  });
  return (
    <div className="home">
      <div className="home__container">
        <div className="banner">
          <div
            className="banner_carousel"
            style={{ transform: "translateX(-" + ind * 100 + "%)" }}
          >
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Other/BRND_MTH21_SADLPDesktop_1453x363_Final_nolocale_PVD7436_Canada.jpg"
              alt="banner1"
              className="home__banner"
            ></img>
            <img
              src="https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png"
              alt="banner2"
              className="home__banner"
            ></img>
            <img
              src="https://m.media-amazon.com/images/I/61xZ8XpT9BL._SX3000_.jpg"
              alt="banner3"
              className="home__banner"
            ></img>
          </div>
        </div>
        <div className="home__row">
          <Product
            heading="Health & Personal Care"
            imageUrl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg"
            linkText="Shop Now"
            link="www.google.com"
          />
          <Product
            heading="Gaming accessories"
            imageUrl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_2x._SY232_CB667159063_.jpg"
            linkText="See more"
            link="www.google.com"
          />
          <Product
            heading="Electronics"
            imageUrl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg"
            linkText="See more"
            link="www.google.com"
          />
          <Product
            heading="Get fit at home"
            imageUrl="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg"
            linkText="See more"
            link="www.google.com"
          />
          <Product
            heading="Easy returns"
            imageUrl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_2x._SY608_CB432774709_.jpg"
            linkText="Learn more"
            link="www.google.com"
          />
          <Product
            heading="Dresses"
            imageUrl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_2X._SY608_CB626369146_.jpg"
            linkText="Shop now"
            link="www.google.com"
          />
          <Product
            heading="For your Fitness Needs"
            imageUrl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_2X._SY608_CB639748111_.jpg"
            linkText="Shop now"
            link="www.google.com"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
