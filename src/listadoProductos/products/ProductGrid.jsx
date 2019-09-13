import React from 'react';

import { Link } from 'react-router-dom';

const ProductGrid = props => (
    <div className="items">
        {props.products.length > 0 ? (
            props.products.map( (product, index) => (
                <div  key={index}>
                    <div>
                        <img class="image" src={product.thumbnail} alt="" />
                    </div>                    
                    <Link to={`/item/${props.api}/${product.id}`}><div className="title">{product.name}</div></Link>
                    <div className="total-price">Precio: ${new Intl.NumberFormat().format(product.price)}</div>
                    <div>{product.seller.seller_name}</div>
                </div>
            ))
        ) : (
            <div></div>
        )}
    </div>
)

export default ProductGrid;