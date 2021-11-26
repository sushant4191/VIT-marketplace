import React from "react";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

function Product({ item }) {
  return (
    <Container className="flex flex-col">
      <Image src={"https://vit-market.herokuapp.com/products/" + item._id + "/picture"} />
      <h1 className="text-2xl font-bold">{item.productName}</h1>
      <h1 className="text-xl font-semibold text-red-500">Rs. {item.productCost}</h1>
      <h3 className="underline text-right ml-auto mr-2 text-sm font-medium text-gray-400">Sold by: {item.postedBy}</h3>
      <Info>
        <Icon>
          <Link to={process.env.PUBLIC_URL + "/profile/" + item.postedByEmail}><ShoppingCartOutlined /></Link>
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;