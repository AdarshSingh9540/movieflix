import React from 'react';
import MoviesCards from './MoviesCards';

const MoviesList = ({ title, movies }) => {
  return (
    <div className='px-6'>
      <h1 className='text-xl font-bold md:text-3xl py-6 text-white'>{title}</h1>
      <div className="flex overflow-auto scrollbar-none cursor-pointer">
        <div className='flex'>
          {movies && movies.map((movie) => (
            <MoviesCards
              key={movie.id}
              id={movie.id}
              posterPath={movie?.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
              overview={movie.overview}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
