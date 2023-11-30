import React, { useState } from 'react'
import background from '../utils/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg'
const Login = () => {
    const [issignin,settoggle]=useState(true)
    const togglebutton = ()=>{
        settoggle(!issignin)
    }
  return (
    <div >
        <div>
            <img src={background} alt='back' />
            </div>
          
        <div className='absolute top-40 m-auto py-5 px-2 right-0 left-0 opacity-90  bg-black w-4/12 text-white rounded-lg'>
        <h1 className='text-center text-3xl py-3 font-sans '>{issignin?"Sign In":"Sign Up"}</h1>
        <form className='flex flex-col items-center  '>
       {!issignin && <input className='my-5 w-9/12  px-3 py-3 bg-slate-600 opacity-30 placeholder-slate-100 font-sans' type='text' placeholder='Full Name'/> }
        <input className='my-5 w-9/12  px-3 py-3 bg-slate-600 opacity-30 placeholder-slate-100 font-sans' type='text' placeholder='Email Address'/>
        <input className='my-5 w-9/12  px-3 py-3 bg-slate-600 opacity-30 placeholder-slate-100 font-sans' type='password'  placeholder='Password'/>
        <button className='my-5 w-9/12  px-3 py-3 bg-red-700 rounded-sm' type='submit'>Submit</button>
       </form>
       <p className='my-3 text-center hover:cursor-pointer' onClick={togglebutton}>{issignin?"New to Netflix? Sign up now.":"Already Registered User?"}</p>
       </div>
    </div>
  )
}

export default Login