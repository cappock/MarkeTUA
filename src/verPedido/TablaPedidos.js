import React, { Component } from 'react';
import Pedido from './Pedido';


class TablaPedidos extends Component {
    state = {
        endpoint: "https://marketua-go-api.herokuapp.com/orders/edison.bedoyag",
        orders: null
    };
    componentDidMount() {
        const conf = {
            method: "get",
            headers: new Headers({ "Content-Type": "application/json" })
        };
        fetch(this.state.endpoint, conf).then(response => {
            return response.json();
        }).then(data => {
            this.setState({ orders: data });
        });
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.orders.length > 0 ? (
                            this.state.orders.map((order, index) => (

                                <Pedido payment_method={order.payment_method} shipment_address={order.shipment_address} total={order.total} username={order.username}></Pedido>

                            ))
                            ) : (
                                <div></div>
                            )}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default TablaPedidos;