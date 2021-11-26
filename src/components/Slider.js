import React, { useState } from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons'
import { Button} from 'react-bootstrap';
import { sliderItems } from '../data';


const Container =styled.div`
        width:100%;
        height:100vh;
        display:flex;
        overflow:hidden;
`;

const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color:white;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props=>props.direction==="left" && "10px"};
    right:${props=>props.direction==="right" && "10px"};
    cursor:pointer;
    opacity:0.5;
    margin:auto;
    z-index:2;
    `;

    const Wrapper=styled.div`
    height: 100%;
    display: flex;
    transition:all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex*-100}vw); 
    `;
    const Slide=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color: #${props=>props.bg};
    `;

    const ImageContainer=styled.div`
    height:100%;
    flex:2;
    `;

    const Image=styled.img`
    height:85%;
    /* width:100%; */
    `;

    const InfoContainer=styled.div`
    flex:1;
    padding:50px;
    `;

    const Title=styled.h1`
    font-size:50px;
    `;

    const Desc=styled.p`
    margin:30px 0px;
    font-size:20px;
    font-weight:400;
    letter-spacing:1px;
    `;

function Slider() {
  const[slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{

        if(direction==="left")
        {
            setSlideIndex(slideIndex>0? slideIndex-1:2)
        }else{
            setSlideIndex(slideIndex<2? slideIndex+1:0);
        }
    };
    return (
        <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(
            <Slide bg={item.bg} key={item.id}>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>
               {item.desc}
            </Desc>
            {/* <Button>Shop Now</Button> */}
            <Button variant="outline-dark"  size="lg">Shop Now</Button>{' '}
            </InfoContainer>
            <ImageContainer>
                <Image src={item.img}/>
            </ImageContainer>
            </Slide>
        ))}
        </Wrapper>
        <Arrow  direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
        </Container>
        )
};

export default Slider;
