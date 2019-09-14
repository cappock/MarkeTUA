import React from 'react';
import CarList from './carrito/CarList';
import Busqueda from './listadoProductos/Busqueda'
import Detalle from './detalleProducto/Detalle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Busqueda} />
          <Route path="/item/:api/:id" component={Detalle} />
          <Route path="/carrito" component={CarList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
