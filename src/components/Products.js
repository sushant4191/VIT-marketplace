import React from "react";
import styled from "styled-components";
import { newProducts } from "../data";
import Product from "./Product.js";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

function Products() {
  return (
    <>
    <h1 className="ml-8 font-extrabold text-4xl">New product Listings</h1>
    <Container>
      
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </>
  );
};

export default Products;
