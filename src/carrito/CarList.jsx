import React, { useState, useEffect } from 'react';
import Carrito from './Carrito.js';

function CarList() {
    var car = new Carrito();
    const initialProductState = car.getItems();

    const [ items, setItems] = useState(initialProductState);
    function eliminar(id){
        car.deleteItem(id);
        setItems(car.getItems());
    };

    return (
        <div> 
            {items.length > 0 ? (
                items.map( item => (
                    <div>
                        <p> soy el item {item.name} </p>
                        <input type="button" value="Sacar del carro" onClick = {(e) => eliminar(item.id)}/>                                              
                    </div>
                ))               
            ) : (
                <div></div>
            )}     
        </div>
    );
}

export default CarList;