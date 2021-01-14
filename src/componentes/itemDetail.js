import React, {useState} from 'react';
import '../estilos/itemDetail.css';
import {Card, Button, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../containers/itemCount';
function ItemDetail({nombre, precio, imagen,description, stock, initial}){
    const [contador, setContador] = useState(0)
    const aumentarContador = () =>{
        setContador(contador + 1)
    }

    const restarContador = () =>{
        setContador(contador - 1)
    }
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
                    <div className="botonesCompra">
                        <ItemCount/>
                    
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    )
}
export default ItemDetail;