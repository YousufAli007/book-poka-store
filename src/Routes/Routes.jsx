 import React from 'react';
 
 import { createBrowserRouter } from "react-router";
import ErrotComponant from '../Componant/ErrotComponant/ErrotComponant';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
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
      {
        path:'/about',
        Component:About
      },
      {
        path:'/bookDetails/:id',
        loader:()=>fetch('/booksData.json'),
        hydrateFallbackElement:<h1>Loding...</h1>,
        Component:BookDetails
      }
      
    ],
    errorElement:<ErrotComponant/>
    
  },
]);