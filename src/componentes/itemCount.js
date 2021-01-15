import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../estilos/itemCount.css"

function ItemCount({stock, onAdd, condicional}){
    const [contador, setContador] = useState(1)
    const aumentarContador = () =>{
        setContador(contador + 1)
    }

    const restarContador = () =>{
        setContador(contador - 1)
    }
    const agregarAlCarrito = () =>{
        onAdd(contador)
    }
    return(
        <div>
            <Card.Body className="compraItem">
                <Button variant="primary" onClick={restarContador} disabled={contador <= 1}>-</Button>
                <Card.Text>{contador}</Card.Text>
                <Button variant="primary" onClick={aumentarContador} disabled={contador >= stock}>+</Button>
            </Card.Body>
            <div className="agregarCompra__carro">
                {condicional ?
                    <Button onClick={agregarAlCarrito}>Agregar compra al carro</Button>
                 : null
                }
            
            </div>            
        </div>
    )
}

export default ItemCount