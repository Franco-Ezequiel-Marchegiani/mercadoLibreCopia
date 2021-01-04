import React, {useState} from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style.css"
import ItemList from "../itemListContainer/itemListContainer";

function Item({stock, initial, onAdd}){
    const addToShoppingCartButtons = document.querySelectorAll('.addItem');
    addToShoppingCartButtons.forEach((addToCartButton) => {
        addToCartButton.addEventListener('click', addToCartClicked)
    });
    const shoppingCartItemContainer = document.querySelector('.item')

    function addToCartClicked(e){
        const button = e.target;
        const item = button.closest('.compraItem')

        const itemPrice = item.querySelector('.precioProducto').textContent;
        const itemTitle = item.querySelector('.nombreProducto').textContent;
        const itemImage = item.querySelector('.imagenProducto').src;
        addItemToShoppingCart(itemPrice, itemTitle, itemImage);

    }
    function addItemToShoppingCart(itemPrice, itemTitle, itemImage){
        console.log(itemPrice, itemTitle,itemImage)
        const shoppingCartRow = document.createElement('div');  
        const shoppingCartContent = `
        <article className="item">
        <img src={Imagen} alt="Imagen producto" className="imagenProducto"/>
        <div className="product__container">
        <h2 className="mensajeNombre">Nombre del producto</h2>
        <h3 className="mensajeCaracteristicas">Características del producto <a href="#" className="mensajeModificar">Modificar</a></h3>
        <p className="mensajeEnvio">Envío gratis</p>
        </div>
        <div className="cantidadProductos__container">
            <Button variant="light" className="buttonCompra restarCompra">-</Button>
            <input type="number" className="cantidadProductos"/>
            <Button variant="light" className="buttonCompra sumarCompra">+</Button>
        <span className="cantidadProductosDisponibles">4 Disponibles</span>
        </div>
        <div className="containerPrecio">
        <span className="tipoDeMoneda">$</span>
        <span className="precio__pagar">1.999</span>
        </div>
        </article>
        <ul className="listProducto">
            <li><a href="#" className="optionsItem">Eliminar</a></li>
            <li><a href="#" className="optionsItem">Más productos del vendedor</a></li>
            <li><a href="#" className="optionsItem">Comprar ahora</a></li>
            <li><a href="#" className="optionsItem">Guardar para después</a></li>
        </ul>
        </div>`;    
                shoppingCartRow.innerHTML = shoppingCartContent
                shoppingCartItemContainer.append(shoppingCartRow) 
    }

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
                    </div>
                    <div className="compraItem">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" className="imagenProducto" alt="imagen Producto" />
                            <Card.Body>
                                <Card.Text className="precioProducto">$1500</Card.Text>
                                <Card.Text className="nombreProducto">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button onClick={restarContador} variant="primary"className="buttonCard restItem">Quitar del carrito de compras</Button>
                                <p>Carrito de compras : {contador}</p>
                                <Button onClick={aumentarContador} variant="primary"className="buttonCard addItem">Añadir al carrito de compras</Button>
                                <Button onClick={resetearContador} variant="primary"className="buttonCard">Vacias Carrito</Button>
                            </Card.Body>
                    </Card>   
                    </div>
                    <div className="compraItem">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" className="imagenProducto" alt="imagen Producto" />
                            <Card.Body>
                                <Card.Text className="precioProducto">$1500</Card.Text>
                                <Card.Text className="nombreProducto">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button onClick={restarContador} variant="primary"className="buttonCard restItem">Quitar del carrito de compras</Button>
                                <p>Carrito de compras : {contador}</p>
                                <Button onClick={aumentarContador} variant="primary"className="buttonCard addItem">Añadir al carrito de compras</Button>
                                <Button onClick={resetearContador} variant="primary"className="buttonCard">Vacias Carrito</Button>
                            </Card.Body>
                    </Card> 
                    </div>
                    <div className="compraItem">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" className="imagenProducto" alt="imagen Producto" />
                            <Card.Body>
                                <Card.Text className="precioProducto">$1500</Card.Text>
                                <Card.Text className="nombreProducto">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button onClick={restarContador} variant="primary"className="buttonCard restItem">Quitar del carrito de compras</Button>
                                <p>Carrito de compras : {contador}</p>
                                <Button onClick={aumentarContador} variant="primary"className="buttonCard addItem">Añadir al carrito de compras</Button>
                                <Button onClick={resetearContador} variant="primary"className="buttonCard">Vacias Carrito</Button>
                            </Card.Body>
                    </Card> 
                    </div>
                    <div className="compraItem">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" className="imagenProducto" alt="imagen Producto" />
                            <Card.Body>
                                <Card.Text className="precioProducto">$1500</Card.Text>
                                <Card.Text className="nombreProducto">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button onClick={restarContador} variant="primary"className="buttonCard restItem">Quitar del carrito de compras</Button>
                                <p>Carrito de compras : {contador}</p>
                                <Button onClick={aumentarContador} variant="primary"className="buttonCard addItem">Añadir al carrito de compras</Button>
                                <Button onClick={resetearContador} variant="primary"className="buttonCard">Vacias Carrito</Button>
                            </Card.Body>
                    </Card> 
                    </div> 
                </div>    
        </section>
    )
}

export default Item