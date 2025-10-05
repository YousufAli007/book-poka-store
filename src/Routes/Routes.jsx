 import React from 'react';
 
 import { createBrowserRouter } from "react-router";
import ErrotComponant from '../Componant/ErrotComponant/ErrotComponant';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        path:'/',
        loader:()=>fetch('/booksData.json'),
        Component: Home,
        hydrateFallbackElement:<h1>Loding...</h1>
      },
      
    ],
    errorElement:<ErrotComponant/>
    
  },
]);