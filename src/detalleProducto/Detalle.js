import React, { useState, useEffect } from 'react';
//import './App.css';

function Detalle({ match }) {

    const URL1 = `http://marketua-develop-api.herokuapp.com/products/${match.params.id}`;
    const URL2 = `http://marketua-develop-api.herokuapp.com/products/${match.params.id}`;
    const URL3 = `http://marketua-develop-api.herokuapp.com/products/${match.params.id}`;

    const [item, setItem] = useState({images: ''});

    useEffect(() => {
        const fetchItems = async () => {
          var URL = URL1;
          if(match.params.api === '2'){
            URL = URL2;
          }else if (match.params.api === '3'){
            URL = URL3;
          }   

          const data = await fetch(URL);
          
          const item = await data.json();    
          setItem(item);
        }

        fetchItems();
    },[URL1],[URL2], [URL3]);

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