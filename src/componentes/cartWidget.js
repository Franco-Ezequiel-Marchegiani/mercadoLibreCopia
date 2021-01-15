import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/cartWidget.css';

function CartWidget(){
    return(
        <div className="cartWidget__container">
        <h1>Hola, soy el cartWidget ;)</h1>
        <h2>Tal vez me conozcan de desafíos como "componentes I".</h2>
        <h3>De momento sigo en reparación, estoy tratando de parecerme lo más posible a la página oficial</h3>
        </div>
    )
}

export default CartWidget