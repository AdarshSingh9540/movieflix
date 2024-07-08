import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMG_CDN_URL } from '../utils/Constant';
import Header from './Header';

function FullDetail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const id = queryParams.get('id');
  const title = queryParams.get('title');
  const releaseDate = queryParams.get('releaseDate');
  const overview = queryParams.get('overview');
  const posterPath = queryParams.get('posterPath');

  if (!id || !title || !releaseDate || !overview || !posterPath) {
    return <div>Error: Missing movie details.</div>; // Handle error state
  }

  return (
    
    <div className='bg-slate-400'>
    <div className='text-white font-bold'>
      <Link to={'/browser'}><button className='bg-blue-500 p-2 rounded-lg mt-6 m-4 lg:mx-16'> <span className='text-white font-bold text-xl pr-1'>← </span> Home</button></Link>
    </div>
        <div className="flex flex-col items-center justify-center pt-4 lg:pt-8 ">
    
    <img
      className='rounded-lg w-72 h- lg:w-[400px] lg:h-[500px] shadow-2xl '
      alt='Movie poster'
      src={IMG_CDN_URL + posterPath}
    />
    <div className="mt-8 text-center">
      <h1 className="text-2xl lg:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl lg:text-2xl font-semibold mb-2">Released: {releaseDate}</p>
      <p className="text-slate-900 text-lg mb-6 mx-4 mt-4 lg:mx-[22%]">{decodeURIComponent(overview)}</p>
      {/* Add more details as needed */}
    </div>
  </div>
    </div>
  );
}

export default FullDetail;
