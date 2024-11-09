import React from "react";
import { useParams } from "react-router";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import VideoTrailer from "./VideoTrailer";
import { Link } from "react-router-dom";
import { addShowCards } from "../utils/moviesSlice";
import netflix from "../assets/Netflix_Logo_PMS.png";

const MovieDetails = () => {
  const { movieId } = useParams();
  useTrailerVideo(movieId);

  const dispatch = useDispatch();
  const trailer_video = useSelector((store) => store.movie.trailerVideo);
  if (trailer_video === null) return;
  console.log(trailer_video);
  return (
    <div className="relative w-screen aspect-auto ">
      {/* <div className=' inset-0  absolute z-10 bg-gradient-to-r from-black to-transparent'></div> */}
      <div className="absolute w-screen  z-20 bg-gradient-to-b from-black flex  justify-between">
        <Link to={"/browse"} onClick={() => dispatch(addShowCards(false))}>
          <img className="w-32  z-10 " alt="netflix-logo" src={netflix} />
        </Link>

        <Link to={"/browse"}>
          <button className="text-white bg-red-700 mr-6  h-9 mt-2 px-2">
            Return
          </button>
        </Link>
      </div>
      <VideoTrailer id={trailer_video?.key} />
    </div>
  );
};

export default MovieDetails;
