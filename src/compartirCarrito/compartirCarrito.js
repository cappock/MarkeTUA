import React from 'react';
import Carrito from '../carrito/CarList';

import CarList from '../carrito/CarList';

function compartirCarrito(stringCarrito) {

    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

    var link = "./carrito/" + userCredentials.user+ "/" + "stringCarrito" ;
    return link;

}

function recibirCarrito({ match }) {
    var user = match.params.user;
    
    var car = new Carrito();
    car = car.constructor2(user,match.params.stringCarrito);

    return(
        <div>
            <h3>Carro de {user}</h3>
            <CarList id={user}/>
        </div>
    );
}

export default compartirCarrito;
export {recibirCarrito};