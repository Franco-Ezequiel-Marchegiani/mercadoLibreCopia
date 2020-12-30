import React from 'react';
import NavBar from "./componentes/navbar/navbar";
import Carusel from './componentes/slider/carusel';
import BarraHome from "./componentes/barraHome/barraHome"


const App = function(){
    return(
        <>
            <NavBar/>
            <Carusel/>
            <BarraHome/>
        </>
    )
}

export default App