import React from 'react';
import Carrito from './carrito/Carrito.js';
import CarList from './carrito/CarList.jsx';

function App() {

  var c = new Carrito();
  c.addItem({ id : 1234, name : "Iphone", thumnail : "web.com"});
  c.addItem({ id : 123, name : "Moto", thumnail : "web.com"});
  return (
    <div>
        <CarList/>
    </div>
  );
}

export default App;
