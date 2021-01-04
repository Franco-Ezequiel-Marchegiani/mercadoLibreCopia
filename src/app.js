import React from 'react';
import NavBar from "./componentes/navbar/navbar";
import Carusel from './componentes/slider/carusel';
import BarraHome from "./componentes/barraHome/barraHome"
import Item from "./componentes/item/item"
import ListContainer from './componentes/itemListContainer/itemListContainer';

const App = function(){
    return(
        <>
            <NavBar/>
            <Carusel/>
            <BarraHome/>
            <Item stock={5} initial={0}/>
            <ListContainer/>
        </>
    )
}

export default App