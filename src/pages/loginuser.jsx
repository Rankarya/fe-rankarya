/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom'
function LoginUser() {

  const [walletAddress, setWalletAddress] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const navigateTo = useNavigate()

  async function requestAccount() {
    console.log('requesting acount')

    if(window.ethereum) {
      console.log('detecteed')

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        setWalletAddress(accounts[0])
        console.log('connected to metamask',accounts[0]);
        setLoggedIn(true)
        navigateTo('/')
      }catch (error) {
        console.log('error')
      }

    }else{
      console.log('theres no meta mask')
    }
  }


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
          <button
            type="submit"
            className="w-full py-2 text-center bg-black text-white rounded-md"
          >
            <a href="#">Login</a>
          </button>
          <div className="flex items-center justify-center mt-4">
            <a href="/forgotpassword" className="text-sm text-black hover:underline font-semibold">
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-center mt-4">
          <div className="border-b border-black flex-grow "></div>
            <div className="flex items-center align-items-center">
              <span>OR</span>
            </div>
            <div className="border-b border-black flex-grow "></div>
          </div>
          <button type="button" onClick={requestAccount} className="w-40 py-1 text-center bg-black text-white rounded-md mt-4 flex items-center justify-center">
            <img src="" alt="" />
            Login with Metamask
          </button>
        </form>
        <div className="mt-5 text-center text-sm">
          Dont have an account?{' '}
          <a href="/register" className="text-black hover:underline font-semibold">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
