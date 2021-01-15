import React from 'react';
import NavBar from "./componentes/navbar";
import Carusel from './componentes/carusel';
import BarraHome from "./componentes/barraHome";
import ListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartWidget from './componentes/cartWidget';
const App = function(){
    return(
        <>
            <BrowserRouter>
                <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <Carusel/>
                            <BarraHome/>
                            <ListContainer />
                        </Route>
                        <Route exact path="/category/:id">
                            <ListContainer/>
                        </Route>
                        <Route exact path="/item/:id">
                            <ItemDetailContainer/>
                        </Route>
                        <Route exact path="/cartWidget">
                            <CartWidget/>
                        </Route>
                    </Switch>
            </BrowserRouter>
        </>
    )
}

export default App