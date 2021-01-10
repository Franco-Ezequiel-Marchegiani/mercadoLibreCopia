import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagen from '../navbar/imgnavbar/logo.png'
import {Button, Card} from 'react-bootstrap';
import Item from '../item/item';


function ItemList({productos}){

    /* Lo intenté por afuera y tampoco me funciona el map, lo intenté con y sin el return, no comprendo el error de map  */
    productos.map(producto =>{return(<Item id={producto.id} title={producto.title} image={producto.image} />)} )
    return(
        <section className="sectionItemCount">
            <div className="sectionHeaderItemCount">          
                    <h1 className="tituloUltimaCompra">Basado en tu última compra<a href="#" className="linkUltimaCompra">Ver Historial</a>
                    </h1>                      
            </div>
                <div className="divContainerCompras">
                { productos.map( product => <Item id={product.id} 
                name={product.title} image={product.image} />)
                }
                </div>    
        </section>
    )
}

export default ItemList