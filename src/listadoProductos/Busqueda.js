import React, { useState, useEffect, useRef } from 'react';
import ProductGrid from './products/ProductGrid';
//import './search.scss';

function Listado() {

  const initialProductState = [];

  const [products, setProducts] = useState(initialProductState);
  const [products1, setProducts1] = useState(initialProductState);
  const [products2, setProducts2] = useState(initialProductState);
  const [search, setSearch] = useState("");

  const textInput = useRef(null);

  /*useEffect(() => {

    const fetchItems = async () => {
      const data = await fetch("http://marketua-develop-api.herokuapp.com/search?q=" + search);
      
      const items = await data.json();    

      console.log(items.products);
      setProducts(items.products);
    }

    fetchItems();

  }, [search]);*/

  useEffect(() => {

    const fetchItems = async () => {
      const data1 = await fetch("http://marketua-develop-api.herokuapp.com/search?q=" + search);
      const items1 = await data1.json();

      const data2 = await fetch("http://marketua-develop-api.herokuapp.com/search?q=" + search);
      const items2 = await data2.json();

      const data3 = await fetch("http://marketua-develop-api.herokuapp.com/search?q=" + search);
      const items3 = await data3.json();

      /*for (let object of objects) {
          object.url = url + object.id
      }*/
      //const array = [].concat(items1.products).concat(items2.products).concat(items3.products)
      setProducts(items1.products);
      setProducts1(items2.products);
      setProducts2(items3.products);
    }

    fetchItems();

  }, [search]);

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      const input = textInput.current.value;
      setSearch(input);
    }
  }

  return (
    <div>
      <h1>MarkeTUA</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Buscar" ref={textInput} />
        <button onClick={handleSubmit}>Buscar</button>
      </form>
      <ProductGrid products={products} api='1' />
      <ProductGrid products={products1} api='2' />
      <ProductGrid products={products2} api='3' />
    </div>

  );
}
/*
    <div>
      <h1>MarkeTUA</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Buscar" ref={textInput} />
      </form>
      <ProductGrid products={products} api='1' />
      <ProductGrid products={products1} api='2' />
      <ProductGrid products={products2} api='3' />
    </div>

*/

export default Listado;