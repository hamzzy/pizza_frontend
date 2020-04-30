import React, {Component} from 'react';
import {Carousel, Col, Container, Image, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const bg_1=require('../images/bg_1.png');
const bg_2=require('../images/bg_2.png');
class Main extends Component {
    render() {
        return (
            <>
                <Carousel className="caro" >
                    <Carousel.Item className="bg">
                        <div className="overlay"></div>
                        <div className="text-center mt-5">
                            <span className="subheading">Welcome</span>
                            <h1 className="mb-4">We cooked your desired Pizza Recipe</h1>
                            <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it
                                with the necessary regelialia.</p>
                            <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="#"
                                                                                                            className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View
                                Menu</a></p>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item className="bg2">
                        <div className="overlay"/>

                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Image
                                        src={bg_1}
                                        alt="First slide"
                                        height="400"
                                    />                                </Col>
                                <Col xs={6} md={4}>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Col>

                            </Row>
                        </Container>



                    </Carousel.Item>
                    <Carousel.Item className="bg3">
                        <div className="overlay"/>

                        <Image
                            src={bg_2}
                            alt="First slide"
                            height="300"
                        />
                        <p> D</p>
                        <h3>Cruncy Italian Pizza</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                    </Carousel.Item>

                </Carousel>

            <div className="mainbg">

                <div className=" text-center">
                    <h2 className="mb-4">Our Services</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.</p>
                </div>

                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <span className="flaticon-diet ic"/>
                            <h3 className="heading">Healthy Foods</h3>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                                unorthographic.</p>

                        </Col>
                        <Col xs={6} md={4}>
                            <span className="flaticon-bicycle ic"></span>

                            <h3 class="heading">Fastest Delivery</h3>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>

                        </Col>
                        <Col xs={6} md={4}>
                            <span className="flaticon-pizza-1 ic"></span>

                            <h3 className="heading">Original Recipes</h3>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                                unorthographic.</p>

                        </Col>

                    </Row>


                </Container>


            </div>
                </>
        );
    }
}

export default Main;
