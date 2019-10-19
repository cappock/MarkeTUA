import React, { Component } from 'react';
import '../verPedido/Pedido.scss';

class Pedido extends Component {
    render() {
        return (
               <tr key={this.props.key}>
                <td>{this.props.name}</td>
                <td>{this.props.payment_method}</td>
                <td>{this.props.shipment_address}</td>
                <td>{this.props.total}</td>
                <td>{this.props.username}</td>
            </tr> 
            
        )
    }
}

export default Pedido;