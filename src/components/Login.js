import React, { useRef, useState } from 'react'
import Header from './Header'
import backgroundimage from "../assets/backgroundimage.jpg"
import { checkvaliddate } from '../utils/validate'

const Login = () => {
    const [signIn,setsignIn]=useState(true)
    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)
    const [messages,setmessages]=useState(null)
    const toggleSignIn = ()=>{
        setsignIn(!signIn)
    }
    const handleclick=()=>{

        const message=checkvaliddate(name.current.value,email.current.value,password.current.value)
        setmessages(message)
    }
  return (
    <div className='relative'>    
    <Header/>
    <img alt='background-image ' className='absolute' src={backgroundimage}/>
    <div >
        
       <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 h-fit bg-black z-30 absolute ml-[560px] mt-36 flex flex-col gap-7 px-11 py-7 opacity-90 text-white'>
       <span className='font-bold text-xl'>{signIn?"Sign In":"Sign Up"}</span>

               {!signIn&& <input ref={name}
                type='name' className=' py-3 bg-black  text-white px-3 border border-slate-500 rounded-md focus:bg-slate-600 hover:cursor-pointer focus:text-black' placeholder='Name' />}
        <input ref={email}
         type='email' className=' py-3 bg-black  text-white px-3 border border-slate-500 rounded-md focus:bg-slate-600 hover:cursor-pointer focus:text-black' placeholder='Email address' />
        <input ref={password}
         type='password' className='py-3 bg-black  text-white px-3 border border-slate-500 rounded-md focus:bg-slate-600 hover:cursor-pointer focus:text-black' placeholder='Password'/>
       {messages && <span className='font-bold text-red-600 text-sm'>{messages}</span>}
        <button onClick={handleclick} className='bg-red-600 py-2 mt-5 mb-1'>{signIn?"Sign In":"Sign Up"}</button>
        <span className='cursor-pointer' onClick={toggleSignIn}>{signIn?"New to Netflix? Sign Up.":"Already an user? Sign In"}</span>

        </form>

  
    </div>
    </div>

  )
}

export default Login