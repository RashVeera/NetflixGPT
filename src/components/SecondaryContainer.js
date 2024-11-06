import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black pt-44 md:pt-0 lg:pl-12 w-screen">
      <MovieList
        title={"Now Playing Movies"}
        moviesList={movies?.nowPlayingMovies}
      />
      <MovieList title={"Popular Movies"} moviesList={movies?.popularMovies} />
      <MovieList
        title={"Top Rated Movies"}
        moviesList={movies?.topRatedMovies}
      />
      <MovieList
        title={"Upcoming Movies"}
        moviesList={movies?.upcomingMovies}
      />
    </div>
  );
};

export default SecondaryContainer;
