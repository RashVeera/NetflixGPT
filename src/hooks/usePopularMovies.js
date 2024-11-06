import { useDispatch, useSelector } from "react-redux";
import { addPopularmovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const selectMovies = useSelector((store) => store.movie?.popularMovies);

  const nowplayingmovies1 = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options,
    );
    const result = await movies.json();
    dispatch(addPopularmovies(result.results));
  };

  useEffect(() => {
    !selectMovies && nowplayingmovies1();
  }, []);
};

export default usePopularMovies;
