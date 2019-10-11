import React, { useState, useEffect} from 'react';
import Carrito from './Carrito.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

import compartirCarrito from '../compartirCarrito/compartirCarrito';

// import Sale from '../sale/Sale';

import './car.scss';

function CarList( {match} ) {
    console.log(match);
    var id = match.params.id;   
    var car = new Carrito();
   
    if(typeof id !== 'undefined'){
        car = car.constructor1(id);
    }

    const itemsInitialState = car.getItems();
    var initialTotalState = 0;
    var initialQuantityState = {};

    for (var i = 0; i < itemsInitialState.length; i++) {
        initialQuantityState[itemsInitialState[i].id] = 1;
        initialTotalState += itemsInitialState[i].price;
    }       

    const [count, setCount] = useState(initialTotalState);

    const [items, setItems] = useState(itemsInitialState);
    const [quantity, setQuantity] = useState(initialQuantityState);

    const initialDetailState = {  items, quantity , count  };

    const [detail,setDetail] = useState(initialDetailState);

    const [order, SetOrder] = useState(false);

    const [link, setLink] = useState("");

    function eliminar(id) {
        car.deleteItem(id);
        var aux = Object.assign({}, quantity);
        delete aux.id;
        setQuantity(aux);
        setItems(car.getItems());
    };
    
    useEffect(()=>{
        var aux = 0;
        for (var i = 0; i < items.length; i++) {
            aux += items[i].price * quantity[items[i].id];
        }
        setCount(aux);
        setDetail({  items, quantity , count  });
    }, [quantity]);

    function decrease(idItem) {
        var aux = Object.assign({}, quantity);
        if (aux[idItem] <= 0) {
            return "Incorrect Value";
        }
        aux[idItem] -= 1;
        setQuantity(aux);
    }

    function increase(idItem) {
        var aux = Object.assign({}, quantity);
        aux[idItem] += 1;
        setQuantity(aux);
    }

    const handleSale = e => {
        localStorage.setItem("DetallePedido", JSON.stringify(detail));
        SetOrder(true);
    }

    const handleCompartir = e => {

        console.log(JSON.stringify(items));
        setLink(compartirCarrito(JSON.stringify(items)));
    }

    return (
        <div className="shopping-car_items">
            <h2>Shopping Cart</h2>
            {items.length > 0 ? (
                items.map((item, index) => (
                    <div className="shopping-car__item" key={index}>
                        <FontAwesomeIcon className="delete__button" onClick={(e) => eliminar(item.id)} icon={faTrashAlt} size="2x" />
                        <img className="product-image" src={item.thumbnail} alt="product" />
                        <div className="product-detail">
                            <h3>{item.name}</h3>
                            <h3>{item.brand}</h3>
                            <br />
                            <div className="product-quantity">
                                <FontAwesomeIcon onClick={(e) => increase(item.id)} icon={faPlus} />
                                <p className="product-quantity__number">{quantity[item.id]}</p>
                                <FontAwesomeIcon onClick={() => decrease(item.id)} icon={faMinus} />
                            </div>
                            <br />
                            <p className="product-price">${new Intl.NumberFormat().format(item.price)}</p>
                        </div>
                    </div>
                ))
            ) : (
                    <div></div>
                )}
             
            <h2>Total ${new Intl.NumberFormat().format(count)}</h2>
            <Link to={`/venta/`}>
                <button onClick={handleSale}>Realizar Pedido</button>
            </Link>
            
            <button onClick={handleCompartir} >  Compartir Carrito </button>


            {link==="" ? (
                <div> 
                </div>
            ) : (
                <div> 
                    <Link to={link}>
                        <h2>Compartir</h2>
                    </Link>
                </div>
                )}


            {/* {order ? (
                <Sale/> 
            ) : (
                    <div></div>
                )} */}
     
        </div>
    );
}

export default CarList;