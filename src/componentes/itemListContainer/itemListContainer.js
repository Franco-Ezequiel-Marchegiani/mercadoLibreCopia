import React from 'react';
import "./itemListContainer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagen from '../navbar/imgnavbar/logo.png'
import {Button}  from 'react-bootstrap';

function ListContainer(){
    return(
        <section className="itemListBackground">
            <div className="itemListContainer">
            <ul className="elements">
                <li className="tabs"><a href="">Carrito</a></li>
                <li className="tabs"><a href="">Guardados</a></li>
            </ul>
            <hr className="line"/>
            <div className="item-cart">
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
            </div>
            
            <div>
                <h3 className="tituloItemList">Tu carrito está vacío</h3>
                <h4 className="subTituloItemList">¿No sabes qué comprar? ¡Miles de productos te esperan!</h4>
            </div>
            </div>           
        </section>
    )
}
export default ListContainer