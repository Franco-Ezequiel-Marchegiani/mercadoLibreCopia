import React from 'react';
import CartWidget from "./componentes/cartWidget";
import ItemListContainer from './componentes/itemListContainer';


const App = function(){
    return(
        <>
            <CartWidget/>
            <ItemListContainer/>
        </>
    )
}

export default App