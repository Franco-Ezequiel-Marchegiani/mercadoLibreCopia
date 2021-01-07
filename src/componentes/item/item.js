import React, {useState} from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style.css"
import "../itemListContainer/itemListContainer.css"

function Item({stock, initial, onAdd}){

    const [contador, setContador] = useState(0)
    const aumentarContador = () =>{
        setContador(contador + 1)
    }
    
    const restarContador = () =>{
        setContador(contador - 1)
        document.getElementById("aniadirCompra").disabled = false;
        if(contador <= 0){
            setContador(0)
        }
    }
    const resetearContador = () =>{
        setContador(0)
        document.getElementById("aniadirCompra").disabled = false;
    }
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" className="imagenProducto" alt="imagen Producto" />
                <Card.Body>
                    <Card.Text className="precioProducto">$1500</Card.Text>
                    <Card.Text className="nombreProducto">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button onClick={restarContador} variant="primary" className="buttonCard restItem">Quitar del carrito de compras</Button>
                    <p>Carrito de compras : {contador}</p>
                    <Button disabled={contador >= stock} onClick={aumentarContador} variant="primary"className="buttonCard addItem" id="aniadirCompra">Añadir al carrito de compras</Button>
                    <Button onClick={resetearContador} variant="primary"className="buttonCard vaciarCarrito">Vacias Carrito</Button>
                </Card.Body>
        </Card> 
    )
}

export default Item