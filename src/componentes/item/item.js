import React, {useState} from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style.css"
import "../itemListContainer/itemListContainer.css"

function Item({title, price, image}){

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} className="imagenProducto" alt="imagen Producto" />
                    <Card.Body>
                        <Card.Text className="precioProducto">{price}</Card.Text>
                        <Card.Text className="nombreProducto">
                        {title}
                        </Card.Text>
                    </Card.Body>
            </Card> 
        </div>
    )
}

export default Item