import React, { useState, useEffect } from 'react';
import './Detail.scss';
import CarouselPage from './CarouselPage';
import Carrito from '../carrito/Carrito.js';

function Detalle({ match }) {

  const URL1 = `http://marketua-develop-api.herokuapp.com/products/${match.params.id}`;
  const URL2 = `http://marketua-develop-api.herokuapp.com/products/${match.params.id}`;
  const URL3 = `http://marketua-develop-api.herokuapp.com/products/${match.params.id}`;

  const [item, setItem] = useState({ images: '' });

  useEffect(() => {
    const fetchItems = async () => {

      let URL = URL1;

      if (match.params.api === '2') {
        URL = URL2;
      } else if (match.params.api === '3') {
        URL = URL3;
      }
      const data = await fetch(URL);

      const item = await data.json();
      setItem(item);
    }

    fetchItems();
  }, [URL1, URL2, URL3]);

  function agregarAlCarrito(item){
    var c  = new Carrito();
    c.addItem(item);
  }

  return (


    <div className="item-detail2">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <div className="title2">
        <h2>{item.name}</h2>
        <div className="add-car2" onClick={e => agregarAlCarrito(item)}>+ Add</div>
      </div>

      <div className="item2">
        <div className="image2">
          <CarouselPage thumbnail={item.thumbnail} name={item.name} images={item.images}></CarouselPage>
        </div>
        <div className="info">
          <div className="item-info info1">
            <h3 className="subtitle info2">Description</h3>
            <p>
              {item.description}
            </p>
          </div>
          <div className="info2">
            <div className="item-info">
              <h3 className="subtitle">Brand</h3>
              <p>
                {item.brand}
              </p>
            </div>
            <div className="item-info">
              <h3 className="subtitle">Category: </h3>
              <p>
                Category 1, Category2, Category 3....
          </p>
            </div>
            <div className="item-info">
              <h3 className="subtitle">Rating</h3>
              <p>
                {item.rating}
              </p>
            </div>
            <div className="item-info">
              <h3 className="subtitle">Sold units: </h3>
              <p>
                {item.sold_units}
              </p>
            </div>
          </div>
          <p className="total-price2">Price: ${new Intl.NumberFormat().format(item.price)} </p>
        </div>
      </div>
    </div>

  );
}

export default Detalle;