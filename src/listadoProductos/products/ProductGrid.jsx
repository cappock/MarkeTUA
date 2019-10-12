import React from 'react';

import { Link } from 'react-router-dom';

const ProductGrid = props => (
    <div className="items">
        {props.products.length > 0 ? (
            props.products.map((product, index) => (
                <div className="item" key={index}>
                    <img className="image" src={product.thumbnail} alt="" />
                    <div className="item-detail">
                        <Link to={`/item/${props.api}/${product.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <h2 className="item-title">{product.name}</h2>
                        </Link>
                        <p className="item-price">Precio: ${new Intl.NumberFormat().format(product.price)}</p>
                        <p className="item-seller">{product.seller.seller_name}</p>
                    </div>
                </div>
            ))
        ) : (
                <div></div>
            )}
    </div>
)

export default ProductGrid;