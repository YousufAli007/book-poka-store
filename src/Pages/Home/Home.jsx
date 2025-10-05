import React, {  } from 'react';
import Baner from '../../Componant/Baner/Baner';
import Books from '../../Componant/Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data =useLoaderData()
  // console.log(data)
  return (
    <div className='p-2'>
       <Baner></Baner>
       <Books data={data}></Books>
        

    </div>
  );
};

export default Home;