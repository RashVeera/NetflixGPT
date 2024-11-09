import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const ShowGPTResults = () => {
  const gptMovie_results = useSelector((store) => store.gpt);
  if (
    gptMovie_results?.showGPTMovies === null ||
    gptMovie_results?.showGPTMovies === undefined
  )
    return;
  const gptMovieNames = gptMovie_results?.showGPTMovieNames;
  const gptMovieResults = gptMovie_results?.showGPTMovies;

  return gptMovieResults.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-3/5 ml-60 md:ml-72 lg:w-4/5 bg-black opacity-90 mt-72 lg:ml-48 px-11 ">
      {gptMovieResults.map((movie, index) => (
        <MovieList title={gptMovieNames[index]} moviesList={movie} />
      ))}
    </div>
  );
};

export default ShowGPTResults;
