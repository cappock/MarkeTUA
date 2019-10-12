import React, { useState} from 'react';

import { Link } from 'react-router-dom';
import './nav.scss';
import SignInPage from './logeoFirebase/SignInPage';

const Navbar = props => (
      <nav className="navbar">
            <Link className='logo' to={`/`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            </Link>
            <div className='icons'>
                  <Link to={`/carrito`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <img className="shopping-car"
                              src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-01-512.png"
                              alt="car" />
                  </Link>
                  <Link to={`/pedidos`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <img className="orders"
                              src="https://previews.123rf.com/images/vladvm/vladvm1506/vladvm150601455/41355947-the-checklist-icon-clipboard-symbol-flat-vector-illustration.jpg"
                              alt="orders" />
                  </Link>
                  <SignInPage className='sing-in'></SignInPage>
            </div>

      </nav>
)

export default Navbar;