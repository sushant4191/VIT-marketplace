import React from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons'
import { Button} from 'react-bootstrap';


const Container =styled.div`
        width:100%;
        height:100vh;
        display:flex;
        overflow:hidden;
        /* background-color: coral; */
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
    `;

    const Wrapper=styled.div`
    height: 100%;
    display: flex;
    `
    const Slide=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color: #${props=>props.bg};
    `;

    const ImageContainer=styled.div`
    height:100%;
    flex:1;
    `;
    const Image=styled.img`
    height:85%;
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


const slider = () => {
    return (
        <div>
        <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
        <Slide bg="fcf1ed">
        <InfoContainer>
            <Title>Watch at Cheapest Rate</Title>
            <Desc>
                Nostrud nulla aliquip deserunt deserunt ullamco ex nulla pariatur. Veniam et ea sint reprehenderit quis aute amet incididunt Lorem sunt cupidatat ipsum incididunt eiusmod. Occaecat incididunt incididunt aliqua occaecat enim laborum fugiat voluptate occaecat occaecat amet dolore.
            </Desc>
            {/* <Button>Shop Now</Button> */}
            <Button variant="outline-dark"  size="lg">Shop Now</Button>{' '}
            </InfoContainer>
            <ImageContainer>
                <Image src="https://staticimg.titan.co.in/production/promotions/so_onyx/D3/banner-titan1.jpg"></Image>
            </ImageContainer>
            </Slide>
            <Slide>
        <InfoContainer>
            <Title>Holiday Sale
            </Title>
            <Desc>
                Nostrud nulla aliquip deserunt deserunt ullamco ex nulla pariatur. Veniam et ea sint reprehenderit quis aute amet incididunt Lorem sunt cupidatat ipsum incididunt eiusmod. Occaecat incididunt incididunt aliqua occaecat enim laborum fugiat voluptate occaecat occaecat amet dolore.
            </Desc>
            {/* <Button>Shop Now</Button> */}
            <Button variant="outline-dark"  size="lg">Shop Now</Button>{' '}
            </InfoContainer>
            <ImageContainer>
                <Image src="https://assets.materialup.com/uploads/b8c09f81-df2d-4d81-bd95-58fa1413063d/preview.png"></Image>
            </ImageContainer>
            </Slide>
            <Slide bg="fcf1ed">
        <InfoContainer>
            <Title>Hostel Sale</Title>
            <Desc>
                Nostrud nulla aliquip deserunt deserunt ullamco ex nulla pariatur. Veniam et ea sint reprehenderit quis aute amet incididunt Lorem sunt cupidatat ipsum incididunt eiusmod. Occaecat incididunt incididunt aliqua occaecat enim laborum fugiat voluptate occaecat occaecat amet dolore.
            </Desc>
            {/* <Button>Shop Now</Button> */}
            <Button variant="outline-dark"  size="lg">Shop Now</Button>{' '}
            </InfoContainer>
            <ImageContainer>
                <Image src="https://staticimg.titan.co.in/production/promotions/so_onyx/D3/banner-titan1.jpg"></Image>
            </ImageContainer>
            </Slide>
        </Wrapper>
        <Arrow  direction="right">
            <ArrowRightOutlined/>
        </Arrow>
        </Container>
                        </div>
                    )
                }

export default slider
