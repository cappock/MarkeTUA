import React from 'react';
import Busqueda from './listadoProductos/Busqueda'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Busqueda} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
