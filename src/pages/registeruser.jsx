//import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
function registeruser() {
  return (
    <div className=" text-black flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 rounded-md">
        <img src="https://i.imgur.com/QW57zC3.jpeg" alt="" className=" mx-auto w-20 mb-5" />
        <form>
          <div className="mb-4">
          <span className="relative flex items-center">
              <FontAwesomeIcon icon={faCircleUser} className="absolute left-2 text-black" />
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Full Name"
                className="w-full pl-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </span>
          </div>
          <div className="mb-6">
            <span className='relative flex items-center'>
              <FontAwesomeIcon icon={faAt} className='absolute left-2 text-black' />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full pl-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </span>
          </div>
          <div className="mb-6">
            <span className='relative flex items-center'>
              <FontAwesomeIcon icon={faLock} className='absolute left-2 text-black' />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full pl-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </span>
          </div>
          <div className="mb-6">
            <span className='relative flex items-center'>
              <FontAwesomeIcon icon={faLock} className='absolute left-2 text-black' />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Confirm Password"
                className="w-full pl-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </span>
          </div>
         
          <button
            type="submit"
            className="w-full py-2 text-center bg-black text-white rounded-md"
          >
            <a href="/login">Register</a>
          </button>
        </form>
        <div className="mt-8 text-center text-sm">
          already have an account?{' '}
          <a href="/login" className="text-black hover:underline font-semibold">
            Login
          </a>
        </div>
      </div>
    </div>
  )
}

export default registeruser