import React, { useState, useEffect, useRef } from 'react';

const URLs = ["http://marketua-develop-api.herokuapp.com/checkout"];

function Sale() {

    const addressInput = useRef(null);
    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
    
    const detail = JSON.parse(localStorage.getItem("DetallePedido"));
    var items1 = [];
    var items2 = [];
    var items3 = [];

    detail.items.forEach(element => {
        if(element.api === 1){
            items1.push({"item_id" : element.id , "quantity": detail.quantity[element.id]});
        }
        else if(element.api === 2){
            items2.push({"item_id" : element.id , "quantity": detail.quantity[element.id]});
        }
        else if(element.api === 3){
            items3.push({"item_id" : element.id , "quantity": detail.quantity[element.id]});
        }
    });

    const[payment_method,setPayment_method] = useState("Contraentrega");
    

    const handleBuy = e => {

        console.log(addressInput);
        var conf = {
            method: "post", 
            body: JSON.stringify({ "items": items1,"total" : detail.count,
                "shipment_address": addressInput, "user_name": userCredentials.user ,
                "payment_method": payment_method}),
            headers: new Headers({ "idToken": userCredentials.idToken })
        };

        try {
            fetch(URLs[0], conf).then(response => {
                return response.json();
            });
        } catch (error) {
            console.log(error, "Error al llamar ruby back");
        }
        
        conf.items = items2;
        try {
            fetch(URLs[1], conf).then(response => {
                return response.json();
            });
        } catch (error) {
            console.log(error, "Error al llamar flask back");
        }

        conf.items = items3;
        try {
            fetch(URLs[2], conf).then(response => {
                return response.json();
            });
        } catch (error) {
            console.log(error, "Error al llamar Go back");
        }

    }

    return(
        <div>
            <form  onSubmit={handleBuy}>
                <p> Direccion : </p>
                <input placeholder="Direccion"  required="required"  ref={addressInput}/>
                <p> Metodo de Pago : </p>
                <input value= "Contra-Entrega" readOnly></input>
                <div><button >Realizar Compra</button></div>
            </form>   
        </div>
    );
}


export default Sale;