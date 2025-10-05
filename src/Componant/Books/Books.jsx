// import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import Container from '../Container/Container';
import Book from '../Book/Book';

const Books = ({data}) => {
  // const [allBook, setAllBook]=useState()
  // useEffect(()=>{
  //     fetch('booksData.json')
  //     .then(res => res.json())
  //     .then(data => setAllBook(data) )
  // },[])
  
//  const fetchPromise =fetch('/booksData.json').then(res => res.json()) 
  

  return (
    <div>
      <h1 className='text-4xl font-bold text-center'>Books</h1>
    
        <Suspense fallback={<span>Loding....</span>}>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
             {
            data.map(singleData => <Book singleData={singleData} key={singleData.bookId}></Book>)
           }
          </div>
        </Suspense>
       
    </div>
  );
};

export default Books;