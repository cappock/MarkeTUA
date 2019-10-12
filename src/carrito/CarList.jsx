import React, { useState, useEffect } from 'react';
import Carrito from './Carrito.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './car.scss';

function CarList(props) {

    var id = props.id;
    var car = new Carrito();

    if (typeof id !== 'undefined') {
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

    const initialDetailState = { items, quantity, count };

    const [detail, setDetail] = useState(initialDetailState);

    const [order, SetOrder] = useState(false);

    const [link, setLink] = useState("");

    function eliminar(id) {
        car.deleteItem(id);
        setItems(car.getItems());
    };

    useEffect(() => {
        var aux = 0;
        for (var i = 0; i < items.length; i++) {
            aux += items[i].price * quantity[items[i].id];
        }
        setCount(aux);
        setDetail({ items, quantity, count });
    }, [count, items, quantity]);

    function decrease(idItem) {

        var aux = quantity;
        if (aux[idItem] <= 0) {
            return "Incorrect Value";
        }
        aux[idItem] -= 1;

        setQuantity(aux);
        var res = 0;
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === idItem) {
                res = items[i].price;
                break;
            }
        }
        setCount(count - res);
    }

    function increase(idItem) {
        var aux = quantity;
        aux[idItem] += 1;
        setQuantity(aux);
        var add = 0;
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === idItem) {
                add = items[i].price;
                break;
            }
        }
        setCount(count + add);
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
                                <FontAwesomeIcon className='minus' onClick={(e) => increase(item.id)} icon={faPlus} />
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
            <div className='payment'>
                <Link to={`/venta/`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <div className='button' onClick={handleSale}>Make an order</div>
                </Link>
                <div className='button' onClick={handleCompartir}> Share Cart </div>
                {/* {link === "" ? (
                    <div>
                    </div>
                ) : (
                        <div>
                          */
                        //    <Link to={link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        //         <h2>Compartir</h2>
                        //     </Link>
                        /* </div>
                    )} */}
                {/* {order ? (
                <Sale/> 
            ) : (
                    <div></div>
                )} */}

            </div>
        </div>
    );
}

export default CarList;