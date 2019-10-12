import React, { useState, useEffect } from 'react';

import CarList from '../carrito/CarList';
import CarritoCompartido from './carritoCompartido';
import Carrito from '../carrito/Carrito';

function RecibirCarrito({ match }) {
    const [user] = useState(match.params.user);
    const [data, setData] = useState([]);

    const carritoCompartido = new CarritoCompartido();
    
    
    useEffect(() => {
        
        const fetchItems = async () => {
            const datos = await carritoCompartido.getCar(user); 
            setData(datos);
        }
        fetchItems();
        
    }, [user]); 

    useEffect(() => {
        var car = new Carrito();
        car = car.constructor2(user, data);
        console.log(data);
    }, [data]); 


  return (
    <div>
        <CarList id={user}/>
    </div>
  );
}

export default RecibirCarrito;