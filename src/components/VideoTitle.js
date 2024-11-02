import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className='text-white pt-72 pl-10 w-1/3'>
        <h1 className='font-bold text-4xl'>{title}</h1>
        <p className='text-sm pt-2'>{description}</p>
        <div className='text-black mt-2 flex gap-3'>
            <button className='px-5 font-bold text-lg  rounded-sm border border-white py-1 bg-white'>▶️ Play</button>
            <button className='px-6 font-bold text-lg rounded-sm border border-white py-1 bg-black text-white opacity-90'>More</button>
        </div>
    </div>
  )
}

export default VideoTitle