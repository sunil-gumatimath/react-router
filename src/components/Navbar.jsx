import React from 'react';
import logo from '../assets/Dark.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" width="130 px" />
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/products'> <li>Products</li> </Link>
        <Link to='/about'><li>About</li> </Link>
        <Link to='/contact'><li>Contact</li></Link>
      </ul>
      <button>Get Started</button>
    </div>
  );
};

export default Navbar;
