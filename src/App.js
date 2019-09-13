import React from 'react';
import Busqueda from './listadoProductos/Busqueda'
import Detalle from './detalleProducto/Detalle'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Busqueda} />
          <Route path="/item/:api/:id" component={Detalle} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
