import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({movies}) => {
    const {poster_path,id}=movies;
    // console.log(movies,"from card")
  return (
    <div className='shrink-0 '>
       <Link to={"/movie/"+id}> <img alt='poster_path' className='w-44 cursor-pointer hover:scale-[0.8]' src={'https://image.tmdb.org/t/p/w500/'+poster_path}/>
       </Link>
    </div>
  )
}

export default MovieCard