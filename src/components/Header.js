import React from 'react'
import netflix from "../assets/Netflix_Logo_PMS.png"

const Header = () => {
  return (
    <div>
        <img className='w-32 absolute z-10 bg-gradient-to-b from-black' alt='netflix-logo' src={netflix}/>
    </div>
  )
}

export default Header