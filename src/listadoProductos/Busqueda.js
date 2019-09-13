import React, { useState, useEffect, useRef } from 'react';
import ProductGrid from './products/ProductGrid';
import './search.scss';

function Listado() {

  const initialProductState = [];

  const [products, setProducts] = useState(initialProductState);
  const [products1, setProducts1] = useState(initialProductState);
  const [products2, setProducts2] = useState(initialProductState);
  const [search, setSearch] = useState("");

  const textInput = useRef(null);

 
  useEffect(() => {

    const fetchItems = async () => {
      const data1 = await fetch("http://marketua-develop-api.herokuapp.com/search?q=" + search);
      const items1 = await data1.json();

      const data2 = await fetch("http://marketua-develop-api.herokuapp.com/search?q=" + search);
      const items2 = await data2.json();

      const data3 = await fetch("http://marketua-develop-api.herokuapp.com/search?q=" + search);
      const items3 = await data3.json();
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

      <div classNameName="search-component">


        <div className="searchBar">
          <div className="search">
            <form onSubmit={handleSubmit}>
              <input className="text" placeholder="Buscar" ref={textInput} />
              <button className="button" onClick={handleSubmit}>Buscar</button>
            </form>

          </div>
        </div>
        <div className="searchBar">
          <div className="search">
            <div className="text">Filtrar por</div>
            <select className="selector">
              <option>Marca</option>
              <option>Categoria</option>
            </select>
            <select className="selector">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
        </div>
        <ProductGrid products={products} api='1' />

      </div>

    </div>

  );
}
export default Listado;