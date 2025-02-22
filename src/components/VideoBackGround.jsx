
import { useSelector } from 'react-redux';
import useMoiveTrailer from '../utils/useMoiveTrailer';

const VideoBackGround = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    useMoiveTrailer(movieId);
  return (
    <div>

<iframe className='w-screen aspect-video overflow-x-hidden'
  src={"https://www.youtube.com/embed/"+trailerVideo?.key+ "?&autoplay=1&mute=1"}
   title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackGround