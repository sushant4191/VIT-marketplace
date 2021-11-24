import React from 'react'
import Navbars from '../components/Navbars'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Footer from '../components/Footer'


export const Home = () => {
    
    const mystyle={
            display:"flex",
            color:"#778899",
            padding:"10px",
            alignitems:"center",
            justifyContent:"center",
            textSpacing:"3px",
    };
    return (
        <div>
            {/* Homepage */}
            {/* <Button>Test Button</Button> */}
            <Navbars/>
            <Slider/>
            <h1 style={mystyle}>Categories</h1>
            <Categories/>
            <h1 style={mystyle}>New Product Listings</h1>
            <Products/>
            <Footer/>
        </div>
    )
}


