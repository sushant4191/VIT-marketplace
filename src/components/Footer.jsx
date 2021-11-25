import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import React from 'react'
import { Box,Container,Row,Column,FooterLink,Heading, FooterItem, Icon} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
        <h1 style={{ color: "white", 
                     textAlign: "center", 
                     marginTop: "-50px",
                     marginBottom:"10px"}}>
          MarVIT
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Writing</FooterLink>
              <FooterLink href="#">Internships</FooterLink>
              <FooterLink href="#">Coding</FooterLink>
              <FooterLink href="#">Teaching</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">Uttar Pradesh</FooterLink>
              <FooterLink href="#">Ahemdabad</FooterLink>
              <FooterLink href="#">Indore</FooterLink>
              <FooterLink href="#">Mumbai</FooterLink>
            </Column>
            <Column>
                <Heading>Sell Here</Heading>
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
                     marginBottom:"-3em"}}>
          Made with 💗 by Sushant
        </h4>
      </Box>
      
      
    );
}

export default Footer

