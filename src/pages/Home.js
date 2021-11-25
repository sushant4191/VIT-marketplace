import React from "react";
import Categories from "../components/Categories.js";
import Footer from "../components/Footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "../components/Products.js";
import Slider from "../components/Slider.js";

function Home() {
  return (
    <div>
      <Slider />
      <Categories />
      <Products/>
      <Footer/>
    </div>
  );
};

export default Home;
