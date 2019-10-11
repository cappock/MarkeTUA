import React, { Component } from 'react';
import CarouserlThumbnaile from './CarouserlThumbnail';

class Pedido extends Component {
    render() {
        return (
            <tr>
                <td width="130">
                    <CarouserlThumbnaile thumbnail={this.props.thumbnail}
                        name={this.props.name}
                        images={this.props.images} />
                </td>
                <td>{this.props.payment_method}</td>
                <td>{this.props.shipment_address}</td>
                <td>{this.props.total}</td>
                <td>{this.props.username}</td>
            </tr>
        )
    }
}

export default Pedido;