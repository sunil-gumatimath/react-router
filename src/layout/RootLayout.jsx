import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
