import useMovieSlice from "../hooks/useMovieSlice";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  useMovieSlice();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const gptSearch = useSelector((store) => store.gpt?.gptsearch);
  console.log(gptSearch);
  if (gptSearch === null) return;

  return (
    <div className="h-screen overflow-x-clip ">
      <Header />
      {gptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
