import React, { useState} from 'react';
import CarList from './carrito/CarList';
import Busqueda from './listadoProductos/Busqueda';
import firebaseConfig from './logeoFirebase/firebaseConfig';
import Detalle from './detalleProducto/Detalle';
import Sale from './sale/Sale';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import TablaPedidos from './verPedido/TablaPedidos'



import {recibirCarrito} from './compartirCarrito/compartirCarrito';

function App() {
  
  const[isLoggeIn,setIsloggeIn] = useState(false);  
      firebaseConfig.auth().onAuthStateChanged(function(user) {
        if (user) {
          setIsloggeIn(true);
        } else {
          setIsloggeIn(false);
        }
      });

  return (
    <Router>
      <div>       
        <Navbar isLoggeIn={isLoggeIn}/>
        <Switch>
          <Route path="/" exact component={Busqueda} />
          <Route path="/item/:api/:id" component={Detalle} />
          <Route path="/carrito" exact component={CarList} />
          <Route path="/carrito/:user/:stringCarrito" component={recibirCarrito} /> 

          {isLoggeIn ? (
                <div> 
                  <Route  path="/venta/" component={Sale} />
                  <Route path="/pedidos" component={TablaPedidos} />
                </div>
            ) : (
                <Redirect to="/carrito"  />
                )}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
