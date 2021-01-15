import React, {useState} from 'react';
import '../estilos/itemDetail.css';
import {Card, Button, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './itemCount';
import { Link } from 'react-router-dom';
function ItemDetail({nombre, precio, imagen,description, stock, initial}){
    const [show, setShow] = useState(null)
    const [hideAgregarCarrito, setHideAgregarCarrito] = useState(true)
    
    const onAdd = cantidad => {
        console.log("Funtion onAdd" + cantidad)
        setShow(cantidad)
        setHideAgregarCarrito(false)
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
                        <ItemCount stock="5" onAdd={onAdd} condicional={hideAgregarCarrito}/>
                    </div>
                    <div className="botonCompra">
                    {show ?
                    <Link to="/cartWidget">
                    <Button>Terminar mi compra</Button>
                    </Link>
                    : null
                    }
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
export default ItemDetail;