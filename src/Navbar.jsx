import React from 'react';

import { Link } from 'react-router-dom';
import './nav.scss';
const Navbar = props => (
<nav className="navbar">

      <Link to={`/`}>
            <h1>MARKETUA</h1>
      </Link>
      

      <Link to={`/carrito`}>
            <img className="shopping-car"
            src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-01-512.png"
            alt="udea"/>
      </Link>
      
</nav>
)

export default Navbar;