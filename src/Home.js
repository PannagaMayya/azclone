import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Other/BRND_MTH21_SADLPDesktop_1453x363_Final_nolocale_PVD7436_Canada.jpg"
          alt="banner"
          className="home__banner"
        ></img>
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
        </div>
        <div className="home__row">
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
