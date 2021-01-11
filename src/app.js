import React from 'react';
import NavBar from "./componentes/navbar/navbar";
import Carusel from './componentes/slider/carusel';
import BarraHome from "./componentes/barraHome/barraHome";
import ListContainer from './componentes/itemListContainer/itemListContainer';
import ItemDetailContainer from './componentes/itemDetail/itemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const App = function(){
    return(
        <>
            <BrowserRouter>
                <NavBar />
                <BarraHome/>
                <Carusel/>
                    <Switch>
                        <Route exact path="/">
                            <ListContainer />
                        </Route>
                        <Route exact path="/category/:id">
                            <ListContainer/>
                        </Route>
                        <Route exact path="/item/:id">
                            <ItemDetailContainer/>
                        </Route>
                    </Switch>
            </BrowserRouter>
        </>
    )
}

export default App