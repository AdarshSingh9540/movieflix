import React from 'react';
import { IMG_CDN_URL } from '../utils/Constant';
import { Link } from 'react-router-dom';

const MoviesCards = ({ id, posterPath, title, releaseDate, overview }) => {
  if (!posterPath) return null;

  return (
    <div className='relative w-44 md:w-48 pr-8 rounded-lg overflow-hidden group'>
      <img 
        className='rounded-lg w-full h-auto'
        alt='Movie card' 
        src={IMG_CDN_URL + posterPath}
      />
      <div className="absolute inset-x-0 bottom-0 h-full bg-black bg-opacity-80 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        <div className="text-white p-4 absolute bottom-0 left-0 right-0">
          <h3 className="text-lg mb-2">{title}</h3>
          <p className="text-sm text-slate-400">{releaseDate}</p>
          <Link to={`/full-detail?id=${id}&title=${encodeURIComponent(title)}&releaseDate=${releaseDate}&overview=${encodeURIComponent(overview)}&posterPath=${encodeURIComponent(posterPath)}`}>
            <button className='bg-blue-600 p-1 rounded-lg px-2 mt-2'>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden sm:inline ltr-4z3qvp e1svuwfo1 px-1"
                data-name="CircleI"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MoviesCards;
