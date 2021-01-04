import React, {useState} from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"

function ItemCount({stock, initial, onAdd}){
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
        <section className="sectionItemCount">
            <div className="sectionHeaderItemCount">          
                    <h1 className="tituloUltimaCompra">Basado en tu última compra<a href="#" className="linkUltimaCompra">Ver Historial</a>
                    </h1>                      
            </div>
                <div className="divContainerCompras">
                    <div className="compraItem">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" alt="imagen Producto" />
                            <Card.Body>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button onClick={restarContador} variant="primary" className="buttonCard">Quitar del carrito de compras</Button>
                                <p>Carrito de compras : {contador}</p>
                                <Button disabled={contador >= stock} onClick={aumentarContador} variant="primary"className="buttonCard" id="aniadirCompra">Añadir al carrito de compras</Button>
                                <Button onClick={resetearContador} variant="primary"className="buttonCard">Vacias Carrito</Button>
                            </Card.Body>
                    </Card>  
                    </div>
                    <div className="compraItem">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" alt="imagen Producto" />
                            <Card.Body>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button onClick={restarContador} variant="primary"className="buttonCard">Quitar del carrito de compras</Button>
                                <p>Carrito de compras : {contador}</p>
                                <Button onClick={aumentarContador} variant="primary"className="buttonCard">Añadir al carrito de compras</Button>
                                <Button onClick={resetearContador} variant="primary"className="buttonCard">Vacias Carrito</Button>
                            </Card.Body>
                    </Card>   
                    </div>
                    <div className="compraItem">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" alt="imagen Producto" />
                            <Card.Body>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button onClick={restarContador} variant="primary"className="buttonCard">Quitar del carrito de compras</Button>
                                <p>Carrito de compras : {contador}</p>
                                <Button onClick={aumentarContador} variant="primary"className="buttonCard">Añadir al carrito de compras</Button>
                                <Button onClick={resetearContador} variant="primary"className="buttonCard">Vacias Carrito</Button>
                            </Card.Body>
                    </Card> 
                    </div>
                    <div className="compraItem">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" alt="imagen Producto" />
                            <Card.Body>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button onClick={restarContador} variant="primary"className="buttonCard">Quitar del carrito de compras</Button>
                                <p>Carrito de compras : {contador}</p>
                                <Button onClick={aumentarContador} variant="primary"className="buttonCard">Añadir al carrito de compras</Button>
                                <Button onClick={resetearContador} variant="primary"className="buttonCard">Vacias Carrito</Button>
                            </Card.Body>
                    </Card> 
                    </div>
                    <div className="compraItem">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" alt="imagen Producto" />
                            <Card.Body>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button onClick={restarContador} variant="primary"className="buttonCard">Quitar del carrito de compras</Button>
                                <p>Carrito de compras : {contador}</p>
                                <Button onClick={aumentarContador} variant="primary"className="buttonCard">Añadir al carrito de compras</Button>
                                <Button onClick={resetearContador} variant="primary"className="buttonCard">Vacias Carrito</Button>
                            </Card.Body>
                    </Card> 
                    </div> 
                </div>    
        </section>
    )
}

export default ItemCount