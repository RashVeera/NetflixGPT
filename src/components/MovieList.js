import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesList }) => {
  if (moviesList === null) return;
  return (
    <div className="-mt-60 z-30 relative my-72">
      <h1 className="text-white font-bold md:text-xl py-2">{title}</h1>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide ">
        {moviesList.map((movie) => (
          <MovieCard key={movie.id} movies={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
