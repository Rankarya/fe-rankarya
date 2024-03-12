//import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
function LoginUser() {
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
          <div className="flex items-center justify-center mb-4">
            <a href="#" className="text-sm text-black hover:underline font-semibold">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-center bg-black text-white rounded-md"
          >
            Login
          </button>
        </form>
        <div className="mt-8 text-center text-sm">
          Dont have an account?{' '}
          <a href="#" className="text-black hover:underline font-semibold">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
