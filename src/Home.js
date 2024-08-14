import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/pricepointstore/Revised/299-pc-without-stripe.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="234"
            title="OnePlus Nord N20 5G|Android Smart Phone|6.43' AMOLED Display|6+128GB|U.S. Unlocked|4500 mAh Battery|33W Fast Charging|Blue Smoke "
            price={299.99}
            image="https://m.media-amazon.com/images/I/71hIjJkMqFL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="123"
            title="Ikigai: The Japanese Secret to a Long and Happy Life Hardcover – August 29, 2017"
            price={12.99}
            image="https://m.media-amazon.com/images/I/71tbalAHYCL.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="789"
            title="SAMSUNG Galaxy Watch Pro 5 45mm LTE Smartwatch w/ Body, Health, Fitness and Sleep Tracker, Improved Battery, Sapphire Crystal Glass, GPS Route Tracking, Titanium Frame, US Version, Black"
            price={499.99}
            image="https://m.media-amazon.com/images/I/61Sl+xoVHoL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="456"
            title="Logitech G PRO X Gaming Headset - Blue VO!CE, Detachable Microphone, Comfortable Memory Foam Ear Pads, DTS Headphone 7.1 and 50 mm PRO G Drivers, Official League of Legends Edition"
            price={74.99}
            image="https://m.media-amazon.com/images/I/71mm1J9608L._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="222"
            title="Anime Heroes Official Naruto Shippuden Action Figure - Namikaze Minato - Poseable Action Figure with Swappable Hands and Accessories 36905"
            price={28.87}
            image="https://m.media-amazon.com/images/I/61S2IUmSaPL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="199"
            title="ASUS ROG Strix Scar 15 (2022) Gaming Laptop, 15.6” 300Hz IPS FHD Display, NVIDIA GeForce RTX 3070 Ti,Intel Core i9 12900H, 16GB DDR5, 1TB SSD, Per-Key RGB Keyboard, Windows 11 Home, G533ZW-AS94 "
            price={1999.99}
            image="https://m.media-amazon.com/images/I/71RK6+rx-xL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
