 import React from 'react';
 
 import { createBrowserRouter } from "react-router";
import ErrotComponant from '../Componant/ErrotComponant/ErrotComponant';
import Root from '../Root/Root';
 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrotComponant/> 
  },
]);