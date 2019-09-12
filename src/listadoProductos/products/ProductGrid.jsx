import React from 'react';

import { Link } from 'react-router-dom';

const ProductGrid = props => (
    <div className="container">
        {props.products.length > 0 ? (
            props.products.map( (product, index) => (
                <div className="card" key={index}>
                    <Link to={`/item/${props.api}/${product.id}`}><div className="title">{product.name}</div></Link>
                    <img src={product.thumbnail} alt=""/>
                    <div className="text">Precio: ${new Intl.NumberFormat().format(product.price)}</div>
                    <div>{product.seller.seller_name}</div>
                </div>
            ))
        ) : (
            <div></div>
        )}
    </div>
)

export default ProductGrid;