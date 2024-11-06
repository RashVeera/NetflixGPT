import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (id) => {
  const dispatch = useDispatch();
  const fetchMovieTrailer = async () => {
    if (id === null) return;
    const Movie_trailers = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      options,
    );
    const result = await Movie_trailers.json();
    const filtered_trailers = result.results.filter(
      (video) => video.type === "Trailer",
    );
    const filtered_movieTrailer = filtered_trailers.length
      ? filtered_trailers[0]
      : result[0];
    // console.log(filtered_movieTrailer)
    dispatch(addTrailerVideo(filtered_movieTrailer));
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, [id]);
};

export default useTrailerVideo;
