import React from 'react';
import banerBook from '../../assets/pngwing1.png'

const Baner = () => {
  return (
    <div className='flex flex-col sm:flex-row  justify-around items-center  p-5 bg-gray-200 my-15 rounded-2xl'>
      <div className='text-center sm:text-left'>
        <h1 className='text-3xl md:text-4xl font-bold leading-[50px]'>Books to freshen up <br className='hidden lg:block' /> your bookshelf</h1>
        <button className='btn bg-[#23be0a] mt-5 text-white'>View The List</button>
      </div>
      <div className='bg-gray-400 rounded-2xl p-5  hover:bg-purple-200 transition duration-[2000ms] mt-5'>
        <img src={banerBook} alt="" />
      </div>
    </div>
  );
};

export default Baner;   