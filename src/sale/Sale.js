import React, { useRef, useState } from "react";
import "./Sale.scss";

const URLs = ["http://marketua-develop-api.herokuapp.com/checkout", " ", "https://marketua-go-api.herokuapp.com/checkout"];

function Sale() {
    const addressInput = useRef(null);
    const payment_methodInput = useRef(null);
    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

    const detail = JSON.parse(localStorage.getItem("DetallePedido"));
    var items = [];
    var total = 0.0;

    detail.items.forEach(element => {
        if (element.api === "1") {
            items.push({ "item_id": element.id.toString(), "quantity": detail.quantity[element.id].toString(), "backend": "ruby" });
            total +=  element.price * detail.quantity[element.id];
        }
        else if (element.api === "2") {
            items.push({ "item_id": element.id.toString(), "quantity": detail.quantity[element.id].toString(), "backend": "flask" });
            total +=  element.price * detail.quantity[element.id];
        }
        else if (element.api === "3") {
            items.push({ "item_id": element.id.toString(), "quantity": detail.quantity[element.id].toString(), "backend": "go" });
            total +=  element.price * detail.quantity[element.id];
        }        
    });

    const handleBuy = e => {
        e.preventDefault();
        const address = addressInput.current.value;
        const payment_method = payment_methodInput.current.value;
        var conf = {
            method: "post",
            mode: 'no-cors' ,
            body: JSON.stringify({
                "items": items,                
                "payment_method": payment_method,
                "shipment_address": address,
                "total": total,
                "username": userCredentials.user
            }),
            headers: new Headers({ "idToken": userCredentials.idToken })
        };
        try {
          fetch(URLs[0], conf).then(response => {
          });
        } catch (error) {
          console.log(error, "Error al llamar RUBY back");
        }

        try {
          fetch(URLs[1], conf).then(response => {
          });
        } catch (error) {
          console.log(error, "Error al llamar FLASK back");
        }

        try {
          fetch(URLs[2], conf).then(response => {
          });
        } catch (error) {          
          console.log(error, "Error al llamar GO back");
        }
    alert("Pedido Realizado");
  };

  return (
    <div className='host'>
        <div className='form'>
      <form onSubmit={handleBuy}>
         <div className='title-sale'>
              <h2>Payment area</h2>
        </div>
        <div className='direccion'>
          <p className='title-input'> Address :</p>
          <input className='input'
            required="required"
            ref={addressInput}/>
        </div>
        <div className= 'metodo-pago'>
          <p className='title-input'> Pay method: </p>
          <select className='input'>
            <option value="Contraentrega" ref={payment_methodInput}>
            Upon delivery
            </option>
          </select>
        </div>
        <div className='buttons'>
          <button className='purchase'>Purchase!</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Sale;
