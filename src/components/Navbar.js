import Cookies from 'js-cookie';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styled from 'styled-components'
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MenuItem=styled.div`
font-size:auto;
text-align:center;
cursor: pointer;
padding-right:1.5em;
padding-left:2em;
`;
const isLoggedIn = Cookies.get('token');

function NavBar() {
  if(isLoggedIn){
    return(<div>
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">MarVIT</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <Nav.Link href="#action1"><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/allproducts">All Products</Link></Nav.Link>
                <Nav.Link><Link to="/contactus">Contact Us</Link></Nav.Link>
                <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
               {/* <Nav.Link><Link to="/"><button onClick={() => {Cookies.remove('token'); window.location.reload();}} class="py-1 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Logout</button></Link></Nav.Link> */}
            </Nav>
                {/* <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"/>
                <Button variant="outline-success">Search</Button>
            </Form> */}
            <MenuItem>
            <Nav.Link><Link to="/"><button onClick={() => {Cookies.remove('token'); window.location.reload();}} class="py-1 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Logout</button></Link></Nav.Link>


            {/* <Badge badgeContent="4" color="primary">
                <ShoppingCartOutlined/>
            </Badge> */}
            </MenuItem>
            </Navbar.Collapse>
            
        </Container>
        </Navbar>
    </div>);
  }else{
    return(<div>
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">MarVIT</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <Nav.Link href="#action1"><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/contactus">Contact Us</Link></Nav.Link>
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                <Nav.Link><Link to="/register">Register</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
            
        </Container>
        </Navbar>
    </div>);
  }
};

export default NavBar;
