import React from "react";
import Categories from "../components/Categories.js";
import Footer from "../components/Footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Products from "../components/Products.js";
import Slider from "../components/Slider.js";
import ProductsHome from "../components/ProductsHome.js";

function Home() {
  const mystyle={
    display:"flex",
    color:"#778899",
    padding:"15px",
    alignitems:"center",
    justifyContent:"center",
    textSpacing:"3px",
    fontSize:"40px",
};
  return (
    <div>
      <Slider />
      <h1 style={mystyle}>Categories</h1>
      <Categories />
      <h1 style={mystyle}>New Product Listings</h1>
      <ProductsHome/>
      <Footer/>
    </div>
  );
};

export default Home;
