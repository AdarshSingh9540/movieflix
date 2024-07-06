import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'
import { useSelector } from 'react-redux'

const MainCont = () => {
const movies = useSelector((store)=> store.movies?.nowPlayingMovies);

if(!movies) return;

const mainMovies = movies[0];
  
const {original_title,overview,id} = mainMovies;
  return (
    <div className='pt-[25%] bg-black lg:pt-0 overflow-x-hidden '>

        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackGround movieId={id}/>
    </div>
  )
}

export default MainCont