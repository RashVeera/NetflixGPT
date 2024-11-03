import React from 'react'
import playicon from "../assets/playicon.png"

const VideoTitle = ({title,description}) => {
  return (
    <div className='text-white pt-72 pl-10 w-screen aspect-video absolute bg-gradient-to-r from-black'>
        <h1 className='font-bold text-4xl w-1/3'>{title}</h1>
        <p className='text-sm pt-2 w-1/3 text-'>{description}</p>
        <div className='text-black mt-2 flex gap-3 w-1/3'>
            <button className='px-5 font-bold text-lg  rounded-sm border border-white py-1 bg-white'><img className='w-5 -mt-1 inline' src={playicon}/> Play</button>
            <button className='px-6 font-bold text-lg rounded-sm  py-1 bg-slate-500  text-white opacity-90'>More</button>
        </div>
    </div>
  )
}

export default VideoTitle