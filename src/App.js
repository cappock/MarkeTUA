import React from 'react';
import Carrito from './carrito/Carrito.js';
import CarList from './carrito/CarList.jsx';

function App() {

  var c = new Carrito();
  c.addItem({ id : 1234, 
    name : "iPhone X", 
    thumnail : "https://www.slickwraps.com/media/catalog/product/cache/1/image/580x580/9df78eab33525d08d6e5fb8d27136e95/w/h/whitefullbody_1_1.jpg",
    brand : "Apple",
    price : 2500
  });
  c.addItem({ id : 123, 
        name : "Moto G", 
        thumnail : "https://www.slickwraps.com/media/catalog/product/cache/1/image/580x580/9df78eab33525d08d6e5fb8d27136e95/w/h/whitefullbody_1_1.jpg",
        brand : "Motorola",
        price : 25000
      });
  return (
    <div>
        <CarList/>
    </div>
  );
}

export default App;
