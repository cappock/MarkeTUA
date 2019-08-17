import React, { useState, useEffect } from 'react';
import './App.css';

function Detalle({ match }) {

    const URL = `URL=${match.params.id}`;

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
    </div>
  );
}

export default Detalle;