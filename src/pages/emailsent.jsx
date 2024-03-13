//import React from 'react'

function emailsent() {
  return (
    <div>
        <div className=" text-black flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 rounded-md">
                <img src="https://i.imgur.com/QW57zC3.jpeg" alt="" className=" mx-auto w-20 mb-5" />
                <form>
                    <div>
                        <p className="text-green-500 text-3xl font-bold text-center">An Email Has Been sent!!</p>
                    </div>
                    <div className="mt-8 text-center text-sm">
                    Return to {' '}
                    <a href="/login" className="text-black hover:underline font-semibold">
                       Login
                    </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default emailsent