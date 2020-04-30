import {Navbar,Nav,Jumbotron,Button} from 'react-bootstrap';


import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class NavBar extends Component {

    render() {



        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Link  to="/" >    <Navbar.Brand href="#home">PizzaCourt</Navbar.Brand> </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav >
                            <Nav.Link href="#home"> <Link  to="/" >  Home  </Link></Nav.Link>
                            <Nav.Link>
                                <Link  to="/menu" >
                                Menu
                                </Link>
                            </Nav.Link>
                            <Nav.Link> <Link  to="/cart">My Cart </Link> </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}


const mapStateToProps = (state) => {

    return {
    }
};

export default connect(mapStateToProps)(NavBar);

