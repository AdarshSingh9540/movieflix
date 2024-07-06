import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';

const SecCont = () => {
    const movies = useSelector((store) => store.movies);
    console.log(movies)
  return ( movies.nowPlayingMovies && (
    <div className='bg-black pb-12'>
    <div className="mt-0 lg:mt-0 pl-4 md:pl-10 lg:pl-10 relative z-20">
    <MoviesList title={"Now Playing "}  movies={movies?.nowPlayingMovies}/>
    <MoviesList title={"Top Rated"}  movies={movies?.TopRatedMovies}/>
    <MoviesList title={"Popular"}  movies={movies?.PopularMovies}/>
    <MoviesList title={"Upcoming Movies"}  movies={movies?.UpcomingMovies}/>
    </div>
    </div>
  )
  )
}

export default SecCont