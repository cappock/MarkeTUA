import React from 'react';
import Busqueda from './listadoProductos/Busqueda'
import Detalle from './detalleProducto/Detalle'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Busqueda} />
          <Route path="/item/:id" component={Detalle} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
