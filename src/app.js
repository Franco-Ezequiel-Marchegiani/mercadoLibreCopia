import React from 'react';
import NavBar from "./componentes/navbar";
import Carusel from './componentes/carusel';
import BarraHome from "./componentes/barraHome";
import ListContainer from './componentes/itemListContainer';
import ItemDetailContainer from './componentes/itemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const App = function(){
    return(
        <>
            <BrowserRouter>
                <NavBar />
                <Carusel/>
                <BarraHome/>
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