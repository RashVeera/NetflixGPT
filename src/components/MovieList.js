import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,moviesList}) => {
    if(moviesList===null) return;
  return (
    <div className='-mt-32 z-30 relative pb-36'>
        <h1 className='text-white py-5 text-xl'>{title}</h1>
        <div className='flex gap-4 overflow-x-auto scrollbar-hide '>
        {moviesList.map((movie)=> <MovieCard key={movie.id} movies={movie}/>)}
        </div>
    </div>
  )
}

export default MovieList