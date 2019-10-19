import React, { Component } from 'react';
import Pedido from './Pedido';
import '../verPedido/Pedido.scss';


class TablaPedidos extends Component {
    state = {
        endpoint: "https://marketua-go-api.herokuapp.com/orders/",
        endpoint1: "http://marketua-develop-api.herokuapp.com/orders/",
        endpoint2: "http://marketua-develop-api.herokuapp.com/orders/",
        data: null,
        data1: null,
        data2: null
    };
    componentDidMount() {
        this.id = "userCredentials";
        var aux = localStorage.getItem(this.id);
        if (aux == null) {
            console.log("no items en local Storage")
        } else {
            var obj = JSON.parse(aux);
            this.userCredential = obj.user;
            const conf = {
                method: "get",
                headers: new Headers({ "Content-Type": "application/json" })
            };
            fetch(this.state.endpoint + this.userCredential, conf).then(response => {
                return response.json();
            }).then(data => {
                this.setState({ data: data });
                console.log(data)
            });
            // fetch(this.state.endpoint1 + this.userCredential, conf).then(response => {
            //     return response.json();
            // }).then(data => {
            //     this.setState({ data1: data });
            //     console.log(data)
            // });
            // fetch(this.state.endpoint2 + this.userCredential, conf).then(response => {
            //     return response.json();
            // }).then(data => {
            //     this.setState({ data2: data });
            //     console.log(data)
            // });
        }

    }
    render() {
        return (
            <div className='screen'>
                <table className='table'>
                    <tbody>
                        {<tr>
                            <th>Item Id</th>
                            <th>Pay method</th>
                            <th>Address</th>
                            <th>Total</th>
                            <th>User-name</th>
                        </tr>}
                        {this.state.data ? (
                            this.state.data.orders.map((order, index) => (
                                <Pedido key={index}
                                    payment_method={order.payment_method}
                                    shipment_address={order.shipment_address}
                                    total={order.total}
                                    username={order.username}
                                    name={order.items[0].id}

                                />
                            ))

                        ) : (
                                <div></div>
                            )}
                        {/* {this.state.data1 ? (
                            this.state.data1.orders.map((order, index) => (
                                <Pedido payment_method={order.payment_method}
                                    shipment_address={order.shipment_address}
                                    total={order.total}
                                    username={order.username}                                  
                                    name={order.items[0].item_id}                                 

                                />

                            ))

                        ) : (
                                <div></div>
                            )} */}
                        {/* {this.state.data2 ? (
                            this.state.data2.orders.map((order, index) => (
                                <Pedido payment_method={order.payment_method}
                                    shipment_address={order.shipment_address}
                                    total={order.total}
                                    username={order.username}                                  
                                    name={order.items[0].item_id}                                 

                                />

                            ))

                        ) : (
                                <div></div>
                            )} */}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default TablaPedidos;