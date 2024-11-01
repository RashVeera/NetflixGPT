import React, { useRef, useState } from 'react'
import Header from './Header'
import backgroundimage from "../assets/backgroundimage.jpg"
import { checkvaliddate } from '../utils/validate'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { photoURL } from '../utils/constants';
import { adduser } from '../utils/userSlice';


const Login = () => {
    const [signIn,setsignIn]=useState(true)
    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)
    const dispatch=useDispatch()
    const [messages,setmessages]=useState(null)
    const navigate=useNavigate();
    const toggleSignIn = ()=>{
        setsignIn(!signIn)
    }
    const handleclick=()=>{
        const message=checkvaliddate(name.current ,email.current.value,password.current.value)
        setmessages(message)
        if(message) return ;
        if(!signIn){
          //Sign Up Logic
              createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: photoURL
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));        

        }).catch((error) => {
          // An error occurred
          // ...
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setmessages(errorCode+' '+errorMessage)
        // ..
      });


        }
        else{
              signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setmessages(errorCode+' '+errorMessage)
      });

        }
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