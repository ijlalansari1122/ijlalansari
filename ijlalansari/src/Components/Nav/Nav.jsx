import React from "react";
import {BrowserRouter as  NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
const Menu = ()=>{
    return(
<React.Fragment>



            <Navbar collapseOnSelect expand="lg" id="topmenu">
                <Container>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav>



                            <Nav.Link href="">
                                <NavLink exact activeClassName="active_class" id="link1" to="/">Home</NavLink>
                            </Nav.Link>
                            <Nav.Link href=""> <NavLink exact activeClassName="active_class" id="link1" to="blog">Blog</NavLink>





                            </Nav.Link>

















                            <Nav.Link href="#">




                                <NavLink exact activeClassName="active_class" id="link1" to="Service">Service</NavLink>






                            </Nav.Link>
                            <Nav.Link href="#"><NavLink exact activeClassName="active_class" id="link1" to="about">About</NavLink>
                            </Nav.Link>




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>












</React.Fragment>


    )}
    export default Menu;