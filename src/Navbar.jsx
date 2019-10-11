import React, { useState} from 'react';

import { Link } from 'react-router-dom';
import './nav.scss';
import SignInPage from './logeoFirebase/SignInPage';

const Navbar = props => (


      <nav className="navbar">

            <Link to={`/`}>
                  <h1>MARKETUA</h1>
            </Link>

            {props.isLoggeIn ? (
                  <Link to={`/pedidos/`}>     
                        <button>Ver pedidos</button>
                  </Link>
            ) : (
                <div></div>
                )}

            <Link to={`/carrito`}>
                  <img className="shopping-car"
                        src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-01-512.png"
                        alt="udea" />
            </Link>
            <SignInPage></SignInPage>

      </nav>
)

export default Navbar;