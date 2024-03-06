// import React from 'react'
import { AiFillFacebook, AiFillGoogleCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Register from '../pages/registeruser';
function loginuser() {
  return (
    <>
    <div className="bg-zinc-200 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg shadow-black/30 pl-10 h-96 w-[350px] flex flex-col justify-center">
        <form className="space-y-1" action="">
          <div>
            <p className="font-semibold text-2xl tracking-wide">LOGIN</p>
          </div>
          <div className="mr-5">
            <p className="text-zinc-600 font-semibold">Email :</p>
            <input className="outline-none px-5 h-10 border border-sm w-full" type="text" placeholder="Email"  />
          </div>
          <div className="mr-5">
            <p className="text-zinc-600 font-semibold">Password</p>
            <input className="outline-none px-5 h-10 border border-sm w-full" type="password" placeholder="Password"  />
          </div>
          <div className='flex space-y gap-5 mt-1'>
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <div className='mr-5'>
            <button className='bg-blue-400 hover:bg-blue-600 text-white rounded-full h-10 w-full font-semibold duration-300'>LOGIN</button>
            <p className='text-end'>Forgot Password</p>
          </div>
          <p className='flex justify-center font-bold'>OR</p>
          <div className='flex flex-row justify-center gap-10 text-3xl'>
            <AiFillTwitterCircle className=' rounded-full text-blue-500'/>
            <AiFillGoogleCircle className=' rounded-full text-red-500'/>
            <AiFillFacebook className=' rounded-full text-blue-700'/>
          </div>              
          <div>
            <p className='text-zinc-500'>Make A Account ? <button className='text-black font-bold underline underline-offset-4'><Link to="/register" element={<Register />}></Link>Register</button></p> 
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default loginuser