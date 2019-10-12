import React, { Component } from 'react';
import Pedido from './Pedido';


class TablaPedidos extends Component {
    state = {
        endpoint: "https://marketua-go-api.herokuapp.com/orders/",
        data: null,
        items: "http://marketua-go-api.herokuapp.com/items/3",
        images: null
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
                fetch(this.state.items, conf).then(response => {
                    return response.json();
                }).then(item => {
                    if (Object.getOwnPropertyNames(data).length !== 0) {
                        this.setState({ images: item });
                        this.setState({ data: data });
                    } else {
                        alert("usuario "+ this.userCredential+" sin pedidos realizados")
                    }

                })


            });
        }

    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td width="130">Items</td>
                            <td>Metodo de pago</td>
                            <td>Direcciòn de envìo</td>
                            <td>Total</td>
                            <td>Nombre de usuario</td>
                        </tr>
                        {this.state.data ? (
                            this.state.data.orders.map((order, index) => (
                                <Pedido payment_method={order.payment_method}
                                    shipment_address={order.shipment_address}
                                    total={order.total}
                                    username={order.username}
                                    thumbnail={this.state.images.thumbnail}
                                    name={this.state.images.name}
                                    images={this.state.images.images}
                                />

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