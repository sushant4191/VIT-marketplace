import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styled from 'styled-components'
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const MenuItem=styled.div`
font-size:auto;
text-align:center;
cursor: pointer;
padding-right:1.5em;
padding-left:2em;
`;
const Navbars = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">MarVIT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Category</Nav.Link>
                    <Nav.Link href="#action2">Sell Here</Nav.Link>
                    <Nav.Link href="#action2">Contact</Nav.Link>
                    <NavDropdown title="Login" id="navbarScrollingDropdown">
                    {/* <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item> */}
                    <NavDropdown.Item href="#action4">Sign Up</NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item> */}
                    </NavDropdown>
                    {/* <Nav.Link href="#" disabled>Link</Nav.Link> */}
                    <Nav.Link href="#">Profile</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                </Nav>
                
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"/>
                    <Button variant="outline-success">Search</Button>
                </Form>
                <MenuItem>
                <Badge badgeContent="4" color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>
                </Navbar.Collapse>
                
            </Container>
            </Navbar>



        </div>
    )
}

export default Navbars
