import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const selectMovies = useSelector((store) => store.movie?.upcomingMovies);

  const nowplayingmovies1 = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options,
    );
    const result = await movies.json();
    dispatch(addUpcomingMovies(result.results));
  };

  useEffect(() => {
    !selectMovies && nowplayingmovies1();
  }, []);
};

export default useUpcomingMovies;
