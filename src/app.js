import React from 'react';
import NavBar from "./componentes/navbar/navbar";
import Carusel from './componentes/slider/carusel';
import BarraHome from "./componentes/barraHome/barraHome"
import ItemCount from "./containers/itemCount"


const App = function(){
    return(
        <>
            <NavBar/>
            <Carusel/>
            <BarraHome/>
            <ItemCount stock={5} initial={0}/>
        </>
    )
}

export default App