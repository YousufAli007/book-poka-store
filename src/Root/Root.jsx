 import React from 'react';
import Navber from '../Componant/Navber/Navber';
 
import { Outlet } from 'react-router';
import Footer from '../Componant/Footer/Footer';
import Container from '../Componant/Container/Container';
 
 const Root = () => {
  return (
    <div>
       
      <Navber></Navber>
      <Container>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
       
    </div>
  );
 };
 
 export default Root;