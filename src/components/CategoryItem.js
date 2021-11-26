import React from "react";
import styled from "styled-components";
import {Button} from 'react-bootstrap';

const Container =styled.div`
    flex:1;
    margin:15px;
    height:60vh;
    position:relative;
    /* display: 'flex'; */
    `;
    const Image=styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    `;

    const Info=styled.div`
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-color:rgba(0,0,0,0.4);
    `;
    const Title=styled.h1`
    color:white;
    margin-bottom:20px;
    font-size:35px;
    
    `;


function CategoryItem({ item }) {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button variant="light"  size="sm">BUY NOW</Button>{' '}
        </Info>
    </Container>
  );
};

export default CategoryItem;
