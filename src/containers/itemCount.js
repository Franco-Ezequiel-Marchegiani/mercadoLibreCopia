import React, {useState} from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../estilos/itemCount.css"

function ItemCount({stock, initial, onAdd}){
    const [contador, setContador] = useState(0)
    const aumentarContador = () =>{
        setContador(contador + 1)
    }

    const restarContador = () =>{
        setContador(contador - 1)
    }
    return(
            <Card.Body className="compraItem">
                <Button variant="primary" onClick={restarContador} disabled={contador <= 0}>-</Button>
                <Card.Text>{contador}</Card.Text>
                <Button variant="primary" onClick={aumentarContador} disabled={contador >= stock}>+</Button>
            </Card.Body>
    )
}

export default ItemCount