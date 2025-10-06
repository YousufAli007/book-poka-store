import { Container } from 'lucide-react';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
  const { id } = useParams()
  const numId = parseInt(id)
  const data = useLoaderData()
  const singleData = data.find(book => book.bookId === numId);
  const { bookName, category, image, publisher, rating, review,  totalPages, yearOfPublishing, author } = singleData || {}
  console.log(singleData)
  return (

    <div className='my-10 flex flex-col lg:flex-row gap-10'>

      <div className='bg-gray-300 flex justify-center p-10 rounded-2xl flex-1   items-center'>
        <img className='rounded-xl h-[400px]' src={image} alt="" />
      </div>

      <div className='flex-1 leading-[40px]    '>
        <h1 className='text-3xl font-bold'>{bookName}</h1>
        <p className='text-[20px]'>By:  {author}</p>
        <hr className='text-gray-300' />
        <p className='text-[20px]'>{category}</p>

        <hr className='text-gray-300' />
        <p className='leading-[30px]'><span className='font-bold'>Review:</span> {review}</p>
        <hr className='text-gray-300' />
        <div className='flex gap-10'>
          <div>
            <p>Number of page:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p> Rating:</p>
          </div>
          <div>
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <button className="btn btn-active mr-3">Read</button>
        <button className="btn btn-active btn-primary">Wishlist</button>


      </div>

    </div>


  );
};

export default BookDetails;