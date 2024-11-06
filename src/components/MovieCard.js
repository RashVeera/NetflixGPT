import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addShowCards } from "../utils/moviesSlice";

const MovieCard = ({ movies }) => {
  const { poster_path, id } = movies;
  const dispatch = useDispatch();

  if (poster_path === null || poster_path === undefined) return;
  // console.log(movies,"from card")
  return (
    <div className="shrink-0 ">
      <Link to={"/movie/" + id} onClick={() => dispatch(addShowCards(true))}>
        {" "}
        <img
          alt="poster_path"
          className="w-44 cursor-pointer h-52 hover:scale-[0.8]"
          src={"https://image.tmdb.org/t/p/w500/" + poster_path}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
