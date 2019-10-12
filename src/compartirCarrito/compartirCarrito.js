import React  from 'react';


import CarritoCompartido from './carritoCompartido';


function compartirCarrito(stringCarrito) {

    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

    const carritoCompartido = new CarritoCompartido(userCredentials.user, stringCarrito);

    carritoCompartido.addUser();
    
    var link = "./compartido/" + userCredentials.user ;

    return link;

}

export default compartirCarrito;
