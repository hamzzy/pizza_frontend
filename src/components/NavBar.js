import {Navbar,Nav,Jumbotron,Button} from 'react-bootstrap';


import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">PizzaCourt</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav >
                            <Link  to="/" >  <Nav.Link href="#deets">Home </Nav.Link> </Link>
                            <Nav.Link>
                                <Link  to="/menu" >
                                Menu
                                </Link>
                            </Nav.Link>
                            <Nav.Link>   <i className="glyphicon glyphicon-shopping-cart"></i> My Cart </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;

