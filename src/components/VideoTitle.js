import React, { useState } from "react";
import playicon from "../assets/playicon.png";

const VideoTitle = ({ title, description }) => {
  const [show, setshow] = useState(true);
  return (
    <div className="text-white pt-28 md:pt-32 lg:pt-56 xl:pt-72 pl-10 w-screen aspect-video absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-xl xl:text-4xl w-1/3">{title}</h1>
      {show ? (
        <p className="hidden xl:block text-sm pt-2 w-1/3 overflow-hidden h-16 ">
          {description}
        </p>
      ) : (
        <p className="hidden xl:block text-sm pt-2 w-1/3 ">{description}</p>
      )}
      <div className="text-black mt-2 flex gap-3 w-1/3">
        <button className="px-2 xl:px-5 font-bold md:text-lg  rounded-sm border border-white py-1  bg-white">
          <img alt="play-button" className="w-3 xl:w-5 -mt-1 inline" src={playicon} /> Play
        </button>
        <button
          onClick={() => setshow(!show)}
          className="px-6 hidden xl:block font-bold text-lg rounded-sm  py-1 bg-white hover:bg-slate-400  text-black opacity-90"
        >
          {show ? "More" : "Less"}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
