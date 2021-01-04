import React from 'react';
import Creditcad from "./iconosBarraHome/credit-card1.svg"
import DebitCard from "./iconosBarraHome/debit-card2.svg"
import Efective from "./iconosBarraHome/payment-agreement3.svg"
import Options from "./iconosBarraHome/view-more4.svg"
import "./barraHome.css"

function BarraHome(){
    return(
        <section className="metodoPago">
            <nav className="barraHome">
                <div className="divContainer">
                    <div className="creditCard">
                    <a href="#"><img src={Creditcad} alt="" className="imagenCreditCard"/></a>    
                        <p className="textoCreditCard">Tarjeta de crédito</p>
                        <a href="" className="linkCreditCard">Ver promociones bancarias</a>
                    </div>
                    <div className="debitCard">
                    <a href="#"><img src={DebitCard} alt="" className="imagenDebitCard"/></a>    
                        <p className="textoDebitCard">Tarjeta de débito</p>
                        <a href="" className="linkDebitCard">Ver más</a>
                    </div>
                    <div className="efective">
                    <a href="#"><img src={Efective} alt="" className="imagenEfective"/></a>    
                        <p className="textoEfective">Efectivo</p>
                        <a href="" className="linkEfective">Ver más</a>
                    </div>
                    <div className="moreOptions">
                    <a href="#"><img src={Options} alt="" className="imagenMoreOptions"/></a>    
                        <p className="textoMoreOptions">Más medios de pago</p>
                        <a href="" className="linkMoreOptions">Ver todos</a>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default BarraHome