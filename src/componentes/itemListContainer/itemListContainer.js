import React, {useState, useEffect} from 'react';
import "./itemListContainer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagen from '../navbar/imgnavbar/logo.png'
import {Button, Card}  from 'react-bootstrap';
import ItemList from '../itemList/itemList';

function ListContainer(){
    
    const [peticion, setPeticion] = useState([])

    useEffect(() =>{
        
        const pedido = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let productos = [
                    {id:1, title: 'Celular Samsung A10', price: 1900, image: {Imagen},stock: 4 },
                    {id:2, title: 'Memoria RAM 8gb', price: 2900, image: {Imagen},stock: 10 },
                    {id:3, title: 'Lamparas 200w', price: 900, image: {Imagen},stock: 19 }
                ]
                resolve(productos)
                console.log("terminó el pedido")
            },2000)
        })
        pedido
        .then((resolve) =>{
            return resolve.productos;   
        })
        .catch((reject) =>{
            console.log("Hubo un inconveniente")
        })
    })


    return(
        <section className="sectionItemCount">
            <ItemList items={peticion}/>    
        </section>
    )
}
export default ListContainer