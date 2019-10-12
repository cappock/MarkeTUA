import React, { Component } from 'react';
import CarouserlThumbnaile from './CarouserlThumbnail';
import '../verPedido/Pedido.scss';

class Pedido extends Component {
    render() {
        return (
               <tr>
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