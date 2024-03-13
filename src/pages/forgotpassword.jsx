//import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
function forgotpassword() {
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
                id="username"
                name="username"
                placeholder="Username or Email"
                className="w-full pl-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
            </span>
            </div>
            <button type="submit" className="w-full py-2 text-center bg-black text-white rounded-md">
            <a href="/emailsent">Reset Password</a>
            </button>
        </form>
        </div>
  </div>
  )
}

export default forgotpassword