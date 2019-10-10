import React, { useState, useEffect, useRef } from 'react';
import ProductGrid from './products/ProductGrid';
import './search.scss';



function Listado() {

const URLs = {"search": ["https://marketua-develop-api.herokuapp.com/search?q=", "https://marketuaflask.herokuapp.com/search?q=", "http://marketua-go-api.herokuapp.com/search?q="],
              "brand" : ["http://marketua-develop-api.herokuapp.com/items/brand/", "https://marketuaflask.herokuapp.com/items/brand/", "http://marketua-go-api.herokuapp.com/items/brand/" ],
              "category": ["http://marketua-develop-api.herokuapp.com/items/category/", "https://marketuaflask.herokuapp.com/items/category/", "http://marketua-go-api.herokuapp.com/items/category/"]};

const brands = ["Lenovo", "Asus", "Apple", "ThinkPad"];
const categories = ["Cellphone", "Portatil", "Mac", "Perifericos"];


function Listado() {
  const initialProductState = [];

  const [products, setProducts] = useState(initialProductState);
  const [products1, setProducts1] = useState(initialProductState);
  const [products2, setProducts2] = useState(initialProductState);
  const [search, setSearch] = useState("portatil");
  const [filterSearch, setFilterSearch] = useState("");

  const [filter, setfilter] = useState("Marca");
  const [options, setOptions] = useState(brands);

  const textInput = useRef(null);


  useEffect(() => {

    const fetchItems = async () => {
      const data1 = await fetch(URLs.search[0] + search);
      const items1 = await data1.json();

      const data2 = await fetch(URLs.search[1]  + search);
      const items2 = await data2.json();

      const data3 = await fetch(URLs.search[2]  + search);
      const items3 = await data3.json();
      setProducts(items1.products);
      setProducts1(items2.products);
      if(items3.products == null){
        items3.products = [];
      }
      setProducts2(items3.products);
    }

    fetchItems();

  }, [search]);

  useEffect(() => {

    const fetchItems = async () => {
      var URLaux = URLs.brand;
      if(filter == "Marca"){
        URLaux = URLs.brand;
      }else{
        URLaux = URLs.category;
      }

      const data1 = await fetch(URLaux[0] + filterSearch);
      const items1 = await data1.json();

      const data2 = await fetch( URLaux[1] + filterSearch);
      const items2 = await data2.json();

      const data3 = await fetch(URLaux[2] + filterSearch);
      const items3 = await data3.json();
      setProducts(items1.products);
      setProducts1(items2.products);
      if(items3.products == null){
        items3.products = [];
      }
      setProducts2(items3.products);
    }
    fetchItems();
  }, [filterSearch]);

  useEffect(() => {
    if(filter == "Marca"){
      setOptions(brands);
    }
    else{
      setOptions(categories);
    }
  }, [filter]);


  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      const input = textInput.current.value;
      setSearch(input);
    }
  }

  const handlefilter = e => {
      setfilter(e.target.value);
  }
  const handleOption = e => {
      setFilterSearch(e.target.value);
  }

  return (
      <div>
        {/* <div className="searchBar"> */}

          <div className="search">
            <form onSubmit={handleSubmit}>
              <input className="search-input" placeholder="Buscar" ref={textInput} />
              <button className="search-button" onClick={handleSubmit}>Buscar</button>
            </form>
              <div>
                <div >Buscar por</div>
                <select onChange={handlefilter}>
                  <option value="Marca">Marca</option> 
                  <option value="Categoria">Categoria</option>
                </select>
                <select onChange={handleOption}>
                  <option value={options[0]} >{options[0]}</option>
                  <option value={options[1]}>{options[1]}</option>
                  <option value={options[2]}>{options[2]}</option>
                  <option value={options[3]}>{options[3]}</option>
                </select>
              </div>  
          </div>
        {/* </div> */}
        <ProductGrid products={products} api='1' />
        <ProductGrid products={products1} api='2' />
        <ProductGrid products={products2} api='3' />
      </div>
  );
}
export default Listado;