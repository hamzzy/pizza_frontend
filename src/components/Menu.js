import React, {Component} from 'react';
import NavBar from "./NavBar";
import { connect } from 'react-redux'
import {addQuantity, addToCart, subtractQuantity} from "./actions/cartActions";
import {Card, Button, Row, Col} from "react-bootstrap";

class Menu extends Component {
    handleClick = (id)=>{
        this.props.addToCart(id);
    }
    render() {

        let itemList = this.props.items.map(item=> {
            return(

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary"  onClick={()=>{this.handleClick(item.id)}}>Go somewhere</Button>
                    </Card.Body>
                </Card>

            )

        });
            return (
            <div className="container">
                <h3 className="text-center">Our items</h3>
                <Col>
                    {itemList}
                </Col>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu);
