import React, { useState, useEffect } from 'react';
import Carrito from './Carrito.js';
import './car.scss';

function CarList() {
    var car = new Carrito();


   

    const itemsInitialState = car.getItems();
    var initialTotalState = 0;
    var initialQuantityState = {};
    for (var i = 0; i < itemsInitialState.length; i++){
        initialQuantityState[itemsInitialState[i].id] = 1;
        initialTotalState += itemsInitialState[i].price;
    } 


    const [count, setCount] = useState(initialTotalState);
 

    const [items, setItems] = useState(itemsInitialState);
    const [quantity, setQuantity] = useState(initialQuantityState);


 

/*
    useEffect(() => {
        var fullAmount = 0.0;
        console.log(quantity);
        for (var i = 0; i < items.length; i++){
            fullAmount += quantity[items[i].id]*items[i].price;
        }
        const fetchedState = fullAmount;
        setTotal(fetchedState);
        console.log(total);

    }, [quantity]);
*/
    function eliminar(id) {
        car.deleteItem(id);
        setItems(car.getItems());
    };

    function decrease(idItem) {
        
        var aux = quantity;
        if(aux[idItem] <= 0 ){
            return "Incorrect Value";
        }
        aux[idItem] -= 1;
        
        setQuantity(aux);
        var res = 0;
        for (var i = 0; i < items.length; i++){
            if(items[i].id === idItem){
                res = items[i].price;
                break;
            }
        } 
        setCount(count - res);
    }

    function increase(idItem) {
        var aux = quantity;
        aux[idItem] +=1;
        setQuantity(aux);
        var add = 0;
        for (var i = 0; i < items.length; i++){
            if(items[i].id === idItem){
                add = items[i].price;
                break;
            }
        }        
        setCount(count + add);
    }

    return (

        <div className="shopping-cart">
            <div className="title">
                Shopping Car
            </div>
            {items.length > 0 ? (
                        items.map(item => (
                            <div className="item">
                                <img className="delete-btn"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzr67gGdHwodSelUNjAocqJgb_YcEa_6h49G2GHVg_XWXxwxlo"
                                    alt="" onClick={(e) => eliminar(item.id)} />
                                <div>
                                    <img className="image" src= {item.thumnail} alt="" />
                                </div>

                                <div className="description">
                                    <span>{item.name}</span>
                                    <span>{item.brand}</span>
                                </div>

                                <div className="quantity">
                                    <div className="plus-btn" onClick = {(e) => increase(item.id)}>+</div>
                                    <input type="number" readOnly="true" name="name" Value={quantity[item.id]}/>
                                    <div className="plus-btn" onClick = {() => decrease(item.id)}>-</div>
                                </div>
                                    <div className="total-price">${item.price}</div>
                            </div>       
                        ))
                    ) : (
                            <div></div>
                        )}

                    <div className="total">
                        <div className="button">Pagar</div>
                        <span>Total  ${new Intl.NumberFormat().format(count) }</span>
                    </div>
                </div>             
                );
            }

export default CarList;