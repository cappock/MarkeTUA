import React, { useState, useEffect } from 'react';
//import './App.css';

function Detalle({ match }) {

    const URL = `http://marketua-develop-api.herokuapp.com/products/${match.params.id}`;

    const [item, setItem] = useState({images: ''});

    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetch(URL);
            
            const item = await data.json();    

            console.log(item);
            setItem(item);
        }

        fetchItems();
    },[URL]);

  return (
    <div>
      <h1>{item.name}</h1>
      <img alt={item.name} src={item.thumbnail} />
      <p>Description {item.description}</p>
      <div>Brand {item.brand}</div>
      <div>Rating {item.rating}</div>
      <div>Sold {item.sold_units}</div>
      <div>Price ${new Intl.NumberFormat().format(item.price)}</div>
    </div>
  );
}

export default Detalle;