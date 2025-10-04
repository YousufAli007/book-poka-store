 import React from 'react';
import Navber from '../Componant/Navber/Navber';
 
import { Outlet } from 'react-router';
import Footer from '../Componant/Footer/Footer';
 
 const Root = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
       <Footer></Footer>
    </div>
  );
 };
 
 export default Root;