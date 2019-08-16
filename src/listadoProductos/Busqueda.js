import React, { useState, useEffect, useRef } from 'react';
import ProductGrid from './products/ProductGrid';

function Listado() {  

  const initialProductState = [];

  const [ products, setProducts ] = useState(initialProductState);
  const [ search, setSearch ] = useState("");

  const textInput = useRef(null);

  useEffect(() => {

    fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${search}`, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const data = myJson.results.map((obj) => {
          let new_obj = { id: obj.id, title: obj.title, thumbnail: obj.thumbnail, price: obj.price, seller: obj.seller.id };
          return new_obj;
        });
        setProducts(data);
      });

  }, [search]);

const handleSubmit = e => {        
  if(e){ 
    e.preventDefault();
    const input = textInput.current.value;
    setSearch(input);
  }
}

  return (
    <div>
      <h1>Daniel Vanegas - MercadoLibre</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Buscar" ref={textInput} />  
      </form>
      <ProductGrid products={products} />
    </div>
  );
}

export default Listado;