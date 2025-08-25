import React from 'react';
import logo from '../assets/Dark.svg';
import { Link } from 'react-router-dom';
import { NavLink,useNavigate } from 'react-router-dom';
const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src={logo} alt="" width="130 px" />
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/products'> <li>Products</li> </NavLink>
        <NavLink to='/about'><li>About</li> </NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
        <NavLink to='/jobs'><li>Jobs</li></NavLink>
      </ul>
      <button onClick={()=> navigate('/contact', {replace:false})}>Get Started</button>
    </div>
  );
};

export default Navbar;
