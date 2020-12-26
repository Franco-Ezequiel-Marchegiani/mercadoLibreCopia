import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandHoldingUsd, faSearch} from '@fortawesome/free-solid-svg-icons'
import "../style.css";
import {Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./navbar/imgnavbar/logo.png";

function CartWidget(){
    return(
        <div className="nav-header">
                <Row>
                    <Col sm={3}><a href="#"><img src={Logo} alt="Logo Mercado Libre" className="logo"/></a></Col>
                    <Col sm={6}>
                    <input type="text" placeholder="Buscar productos, marcas, y más..." name="search" ></input>
                    <Button variant="light"><FontAwesomeIcon icon={faSearch}/></Button> 
                    </Col>
                    <Col sm={3} className="compraAhora"><a href="#"><FontAwesomeIcon icon={faHandHoldingUsd}/> Comprá ahora y pagá después</a></Col>
                </Row>
        </div>
    )
}

export default CartWidget