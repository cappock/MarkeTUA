import React, { Component } from 'react';
import Pedido from './Pedido';


class TablaPedidos extends Component {
    state = {
        endpoint: "https://marketua-go-api.herokuapp.com/orders/edison.bedoyag",
        data: null,
        items: "http://marketua-go-api.herokuapp.com/items/3",
        images: null
    };
    componentDidMount() {
        const conf = {
            method: "get",
            headers: new Headers({ "Content-Type": "application/json" })
        };
        fetch(this.state.endpoint, conf).then(response => {
            return response.json();
        }).then(data => {

            fetch(this.state.items, conf).then(response => {
                return response.json();
            }).then(item => {
                this.setState({ images: item });
                console.log("esta es la data ")
                console.log(item.thumbnail)
                this.setState({ data: data });
            })


        });

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