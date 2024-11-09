import React from "react";

const VideoTrailer = ({ id }) => {
  return (
    <div className="w-screen ">
      <iframe
        className="w-screen  aspect-video"
        src={"https://www.youtube.com/embed/" + id + "?&autoplay=1&mute=1&rel=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
