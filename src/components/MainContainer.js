import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoTrailer from './VideoTrailer';
import { options } from '../utils/constants';
import { addnowPlayingmovies } from '../utils/moviesSlice';
import useTrailerVideo from '../hooks/useTrailerVideo';


const MainContainer = () => {

  const dispatch=useDispatch()
  const nowplayingmovies1 = async ()=>{
  
    const movies= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    console.log(movies)
    const result = await movies.json()
    dispatch(addnowPlayingmovies(result.results))
    console.log(result,'now playing')
  
  }

  useEffect(() => {
    nowplayingmovies1();
  }, []);


    const movie_selected=useSelector((store)=>store.movie?.nowPlayingMovies)
    const movie_top=movie_selected[0]
    console.log(movie_top)

    const {original_title,overview,id}=movie_top;
    // useTrailerVideo(id);


  return (
    <div>
        <VideoTitle title={original_title} description={overview}/>
        <VideoTrailer/>
    </div>
  )
}

export default MainContainer