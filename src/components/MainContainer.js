import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoTrailer from './VideoTrailer';
import { options } from '../utils/constants';
import useMovieSlice from '../hooks/useMovieSlice';
import useTrailerVideo from "../hooks/useTrailerVideo";

const MainContainer = () => {


    const movie_selected=useSelector((store)=>store.movie?.nowPlayingMovies)
    useTrailerVideo(movie_selected ? movie_selected[0].id : null);
    const trailer_video=useSelector((store)=>store.movie?.trailerVideo);
    // console.log(trailer_video)

    if (movie_selected===null || trailer_video===null) {return;}
    const movie_top=movie_selected[0]
    const {original_title,overview}=movie_top;

  return (
    <div>
       <VideoTitle title={original_title} description={overview}/>
        <VideoTrailer id={trailer_video.key}/>
    </div>
  )
}

export default MainContainer