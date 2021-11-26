import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import React from 'react'
import { Box,Container,Row,Column,FooterLink,Heading, FooterItem, Icon} from "./FooterStyles";

function Footer() {
  return (
    <Box>
    <h1 style={{ color: "white", 
                 textAlign: "center", 
                 marginTop: "-50px",
                 marginBottom:"10px",
                 fontSize:"35px",}}>
      🛒MarVIT
    </h1>
    <Container>
      <Row>
        <Column>
          <Heading>Useful Links</Heading>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Testimonials</FooterLink>
        </Column>
        <Column>
          <Heading>Services</Heading>
          <FooterLink href="#">Categories</FooterLink>
          <FooterLink href="#">Cart</FooterLink>
          <FooterLink href="#">Sell Here</FooterLink>
          <FooterLink href="#">Orders</FooterLink>
        </Column>
        <Column>
          <Heading>Contact Us</Heading>
          <FooterLink href="#">VIT- Vellore</FooterLink>
          <FooterLink href="#">VIT- Chennai</FooterLink>
          <FooterLink href="#">VIT- AP</FooterLink>
          <FooterLink href="#">VIT- Bhopal</FooterLink>
        </Column>
        <Column>
            <Heading>Profile</Heading>
            <FooterLink href="#">Login</FooterLink>
            <FooterLink href="#">Sign Up</FooterLink>
        </Column>
      </Row>
      
    </Container>
    <FooterItem>
          <Icon href="#">                             
              <Facebook/>            
          </Icon>
          <Icon href="#">  
              <Twitter/>         
          </Icon>
          <Icon href="#">  
              <Instagram/>            
          </Icon>
          <Icon href="#">  
              <LinkedIn/>
          </Icon>
         </FooterItem>
         
      <h4 style={{ color: "white", 
                 textAlign: "center", 
                 marginTop: "12px",
                 marginBottom:"-3em",
                 fontSize:"20px"}}>
      Made with 💗 by Sushant, Abhinav & Rajan.
    </h4>
  </Box>
  
  
);
};

export default Footer;
