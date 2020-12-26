import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faBell, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import "../style.css";
import {Navbar, NavDropdown, Nav, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemListContainer(){
    return(
        <div className="nav-menu">
                <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">        
                    <Nav.Link href="#home"><FontAwesomeIcon icon={faMapMarkerAlt}/><span> Envios a</span><span> Capital Federal</span> </Nav.Link>           
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Vehículos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Inmuebles</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Tecnología</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Hogar y Electrodomésticos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Herramientas e Industrias</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.6">Juguetes y Bebés</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.7">Deportes y Aire Libre</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.8">Libros</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.9">Accesorios para Vehículos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.10">Moda</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.11">Belleza y Cuidado Personal</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.12">Supermercado</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.11">Agro</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.12">Servicios</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.11">Productos Sustentables</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.12">Ver más categorías</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Ofertas</Nav.Link>
                    <Nav.Link href="#link">Historial</Nav.Link>
                    <Nav.Link href="#home">Supermercado</Nav.Link>
                    <Nav.Link href="#link">Tiendas Oficiales</Nav.Link>
                    <Nav.Link href="#home">Vender</Nav.Link>
                    <Nav.Link href="#link">Ayuda</Nav.Link>
                    <Form inline>
                    <Nav.Link href="#link">Crea tu cuenta!</Nav.Link>
                    <Nav.Link href="#link">Mis Compras</Nav.Link>   
                    <NavDropdown title="Favoritos" id="basic-nav-dropdown">
                    </NavDropdown>
                    <Nav.Link href="#link"><FontAwesomeIcon icon={faBell}/></Nav.Link>
                    <Nav.Link href="#link"><FontAwesomeIcon icon={faShoppingCart}/></Nav.Link>   
                    </Form>
                    
                    
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
    )
}

export default ItemListContainer