import React, {useState} from "react";
import styled from "styled-components";
import { newProducts } from "../data";
import Product from "./Product.js";
import Loader from 'react-loader-spinner';
const axios = require('axios');

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

  function Products() {
    const [products, setProducts] = useState('');
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
      const getUsers = async () => {
          const res = await axios.get("https://vit-market.herokuapp.com/products/",{
              headers: { }
          });
          setProducts(res.data);
          setLoading(false);
          console.log(res.data);
      }

      getUsers();
  }, []);

    if(loading){
      return (
          <div className="container">
              <Loader
                  type="Puff"
                  color="#B6083C"
                  height={100}
                  width={100}
                  timeout={8000}
              />
          </div>
      )
  }else{
    if(products){
      return (
        <>
        {/* <h1 className="ml-8 font-extrabold text-4xl">New product Listings</h1> */}
        <Container>
          
          {products.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </Container>
        </>
      );
    }else{
      return <h1>No products found!</h1>
    }    
  }
};

export default Products;