import React from 'react';
import Seller from '../sellers/Seller';

const ProductGrid = props => (
    <div className="container">
        {props.products.length > 0 ? (
            props.products.map( product => (
                <div className="card" key={product.id}>
                    <div className="title">{product.title}</div>
                    <img src={product.thumbnail} alt=""/>
                    <div className="text">Precio: ${product.price}</div>
                    <Seller id={product.seller}/>
                </div>
            ))
        ) : (
            <div></div>
        )}
    </div>
)

export default ProductGrid;