import React, { useRef } from "react";
import "./Sale.scss";

<<<<<<< HEAD
const URLs = ["http://marketua-develop-api.herokuapp.com/checkout", " ", "https://marketua-go-api.herokuapp.com/checkout"];
=======
const URLs = ["", "", "https://marketua-go-api.herokuapp.com/checkout"];
>>>>>>> 5d152dd2118b13db7902007d33bbfc2184431aa1

function Sale() {
  const addressInput = useRef(null);
  const payment_methodInput = useRef(null);
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

<<<<<<< HEAD
    const addressInput = useRef(null);
    const payment_methodInput = useRef(null);
    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

    const detail = JSON.parse(localStorage.getItem("DetallePedido"));
    var items = [];
=======
  const detail = JSON.parse(localStorage.getItem("DetallePedido"));
  var items = [];
>>>>>>> 5d152dd2118b13db7902007d33bbfc2184431aa1

  detail.items.forEach(element => {
    if (element.api === 1) {
      items.push({
        Item_id: element.id,
        Quantity: detail.quantity[element.id],
        backend: "RUBY"
      });
    } else if (element.api === 2) {
      items.push({
        Item_id: element.id,
        Quantity: detail.quantity[element.id],
        backend: "FLASK"
      });
    } else if (element.api === 3) {
      items.push({
        Item_id: element.id,
        Quantity: detail.quantity[element.id],
        backend: "GO"
      });
    }
  });

<<<<<<< HEAD
    detail.items.forEach(element => {
        if (element.api === 1) {
            items.push({ "item_id": element.id, "quantity": detail.quantity[element.id], "backend": "ruby" });
        }
        else if (element.api === 2) {
            items.push({ "item_id": element.id, "quantity": detail.quantity[element.id], "backend": "flask" });
        }
        else if (element.api === 3) {
            items.push({ "item_id": element.id, "quantity": detail.quantity[element.id], "backend": "go" });
        }
    });

    const handleBuy = e => {
        e.preventDefault();
        const address = addressInput.current.value;
        const payment_method = payment_methodInput.current.value;

        var conf = {
            method: "post",
            body: JSON.stringify({
                "items": items,
                "payment_method": payment_method,
                "shipment_address": address,
                "total": 30.0,
                "username": userCredentials.user
            }),
            headers: new Headers({ "idToken": userCredentials.idToken })
        };

        var conf = {
            method: "post",
            body: {
                "items": [
                    {
                        "item_id": "2",
                        "quantity": "2",
                        "backend": "flask"
                    }
                ],
                "payment_method": "contraentrega",
                "shipment_address": "Calle falsa 123",
                "total": 30,
                "username": "Lucho"
            },
            headers: new Headers({ "idToken": userCredentials.idToken })
        };
=======
  const handleBuy = e => {
    e.preventDefault();
    const address = addressInput.current.value;
    const payment_method = payment_methodInput.current.value;
>>>>>>> 5d152dd2118b13db7902007d33bbfc2184431aa1

    var conf = {
      method: "post",
      body: JSON.stringify({
        Items: items,
        Payment_method: payment_method,
        Shipment_address: address,
        Total: 30.0,
        Username: userCredentials.user
      }),
      headers: new Headers({ idToken: userCredentials.idToken })
    };

    try {
      fetch(URLs[0], conf).then(response => {
        return response.json();
      });
    } catch (error) {
      console.log(error, "Error al llamar RUBY back");
    }

    try {
      fetch(URLs[1], conf).then(response => {
        return response.json();
      });
    } catch (error) {
      console.log(error, "Error al llamar FLASK back");
    }

    try {
      fetch(URLs[2], conf).then(response => {
        return response.json();
      });
    } catch (error) {
      console.log(error, "Error al llamar GO back");
    }

<<<<<<< HEAD
    return (
        <div>
            <form onSubmit={handleBuy}>
                <p> Direccion : </p>
                <input placeholder="Direccion" required="required" ref={addressInput} />
                <p> Metodo de Pago : </p>
                <select>
                    <option value="Contraentrega" ref={payment_methodInput} >Contra-Entrega</option>
                </select>
                <div><button >Realizar Compra</button></div>
            </form>
=======
    alert("Pedido Realizado");
  };

  return (
    <div className='host'>
        <div className='form'>
      <form onSubmit={handleBuy}>
         <div className='title-sale'>
              <h2>Payment area</h2>
>>>>>>> 5d152dd2118b13db7902007d33bbfc2184431aa1
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
