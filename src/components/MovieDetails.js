import React from 'react'
import { useParams } from 'react-router'
import useTrailerVideo from '../hooks/useTrailerVideo'
import { useSelector } from 'react-redux'
import Header from './Header'
import VideoTrailer from './VideoTrailer'

const MovieDetails = () => {
  const {movieId}=useParams()
  useTrailerVideo(movieId)


  const trailer_video=useSelector((store)=>store.movie.trailerVideo)
  if(trailer_video===null) return
  console.log(trailer_video)
  return (
    <div className="relative w-screen aspect-video">
    {/* <div className=' inset-0  absolute z-10 bg-gradient-to-r from-black to-transparent'></div> */}
      <Header/>
      <VideoTrailer   id={trailer_video?.key}/>
    </div>
  )
}

export default MovieDetails