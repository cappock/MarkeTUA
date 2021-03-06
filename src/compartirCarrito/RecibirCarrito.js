import React, { useState, useEffect } from 'react';

import CarList from '../carrito/CarList';
import CarritoCompartido from './carritoCompartido';
import Carrito from '../carrito/Carrito';

function RecibirCarrito({ match }) {

    const carritoCompartido = new CarritoCompartido();
    var car = new Carrito();
    const [user] = useState(match.params.user);
    const [data, setData] = useState({}); 
    const [nCar] = useState(match.params.nCar);   


    useEffect(() => {
        
      const fetchItems = async () => {
          const datos = await carritoCompartido.getCar(user); 
          setData(JSON.parse(datos.carrito)[nCar]);
      }
      fetchItems();

    }, [user]); 

    useEffect(() => {
        car = car.constructor2(user, data); 
    }, [data]); 


  return (
    <div>
        <CarList id={user}/>
    </div>
  );
}

export default RecibirCarrito;