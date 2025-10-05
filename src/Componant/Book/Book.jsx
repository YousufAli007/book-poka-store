import React, { } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ singleData }) => {
  // console.log(singleData)
  const { image, bookName, category
,rating,publisher,yearOfPublishing,tags
} = singleData

  return (
    <div className="card bg-base-100  shadow-sm border-2 border-gray-300">
      <figure className='p-5 my-10 mx-15 bg-gray-100 rounded-2xl'>
        <img
        className='rounded-xl h-[180px] w-[130px]'
          src={image}
          alt="Shoes" />
      </figure>
      
      <div className="card-body">
        <div className='flex justify-between'>
          {
            tags.map((tag,index) => <button className=' text-[#23BE0A]' key={index}>{tag}</button>)
          }
      </div>
        <h2 className="card-title text-2xl">
          {bookName}
          <div className="badge badge-secondary rounded-xl">{yearOfPublishing}</div>
        </h2>
        <p className='text-[18px] font-semibold'>By:{publisher}</p>
        <div className="card-actions  justify-between mt-3">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
        </div>
      </div>
    </div>
  );
};

export default Book;