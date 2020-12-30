import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartWidget(){
    return(
        <Nav.Link href="#link"><FontAwesomeIcon icon={faShoppingCart}/></Nav.Link> 
    )
}

export default CartWidget