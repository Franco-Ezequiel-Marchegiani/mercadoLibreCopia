import React from 'react';
import './itemDetail.css';
import {Card, Button, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetail({nombre, precio, imagen,description, stock, initial}){
    return(
        <div className="itemDetail">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Precio: ${precio}</ListGroup.Item>
                        <ListGroup.Item>Stock disponible: {stock}</ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default ItemDetail;