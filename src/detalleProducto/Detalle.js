import React, { useState, useEffect } from 'react';
import './Detail.scss';

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
    // eslint-disable-next-line
  }, [URL1, URL2, URL3]);

  return (

    <div className="item-detail">
      <div className="title">
        <h2>{item.name}</h2>
        <div className="add-car">+ Add</div>
      </div>
      <div className="item">
        <div className="image">
          <img className="imgSet"
            src={item.thumbnail}
            alt={item.name} />
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
          <p className="total-price">Price: ${new Intl.NumberFormat().format(item.price)} </p>
        </div>
      </div>
    </div>

  );
}

export default Detalle;