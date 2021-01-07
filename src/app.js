import React from 'react';
import NavBar from "./componentes/navbar/navbar";
import Carusel from './componentes/slider/carusel';
import BarraHome from "./componentes/barraHome/barraHome"
import Item from "./componentes/item/item";
import ListContainer from './componentes/itemListContainer/itemListContainer';
import ItemList from './componentes/itemList/itemList';
const App = function(){
    return(
        <>
            <NavBar/>
            <Carusel/>
            <BarraHome/>
            <ListContainer/>
            <ItemList />
            <Item/>
        </>
    )
}

export default App