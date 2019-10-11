import React, { useRef } from 'react';

const URLs = ["","","https://marketua-go-api.herokuapp.com/checkout"];

function Sale() {

    const addressInput = useRef(null);
    const payment_methodInput = useRef(null);
    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
    
    const detail = JSON.parse(localStorage.getItem("DetallePedido"));
    var items = [];


    detail.items.forEach(element => {
        if(element.api === 1){
            items.push({"Item_id" : element.id , "Quantity": detail.quantity[element.id], "backend":"RUBY"});
        }
        else if(element.api === 2){
            items.push({"Item_id" : element.id , "Quantity": detail.quantity[element.id], "backend":"FLASK"});
        }
        else if(element.api === 3){
            items.push({"Item_id" : element.id , "Quantity": detail.quantity[element.id], "backend":"GO"});
        }
    });

    const handleBuy = e => {
        e.preventDefault();
        const address = addressInput.current.value;
        const payment_method = payment_methodInput.current.value;
        
        var conf = {
            method: "post", 
            body: JSON.stringify({
                "Items": items,
                "Payment_method":payment_method,
                "Shipment_address":address,
                "Total":30.0,
                "Username":userCredentials.user
              }),
            headers: new Headers({ "idToken": userCredentials.idToken })
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
    }

    return(
        <div>
            <form onSubmit={handleBuy}>
                <p> Direccion : </p>
                <input placeholder="Direccion"  required="required"  ref={addressInput}/>
                <p> Metodo de Pago : </p>
                <select>
                    <option value="Contraentrega" ref={payment_methodInput} >Contra-Entrega</option>
                </select>
                <div><button >Realizar Compra</button></div>
            </form>   
        </div>
    );
}


export default Sale;