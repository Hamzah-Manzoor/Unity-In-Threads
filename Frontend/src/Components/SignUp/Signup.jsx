import React, { useState } from 'react'

export default function Signup() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
  return (
<div className="flex justify-center min-h-screen text-gray-900 bg-gray-100">
      <div className="flex justify-center flex-1 max-w-screen-xl m-0 bg-white shadow sm:m-10 sm:rounded-lg">
        <div className="p-6 lg:w-1/2 xl:w-5/12 sm:p-12">
          
          <div className="flex flex-col items-center mt-12">
            <h1 className="text-2xl font-extrabold xl:text-3xl">Sign up</h1>
            <div className="flex-1 w-full mt-8">
              <div className="my-12 text-center border-b">
                
              </div>
              <div className="max-w-xs mx-auto">
      <input
        className="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="email" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}
      />
      <input
        className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.validationMessage)}}
      />
      <button
        className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
      >
        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M20 8v6M23 11h-6" />
        </svg>
        <span className="ml-3">
          Sign Up
        </span>
      </button>
      <p className="mt-6 text-xs text-center text-gray-600">
        I agree to abide by templatana's
        <a href="#" className="border-b border-gray-500 border-dotted">
          Terms of Service
        </a>
        and its
        <a href="#" className="border-b border-gray-500 border-dotted">
          Privacy Policy
        </a>
      </p>
    </div>
            </div>
          </div>
        </div>
        <div className="flex-1 hidden text-center bg-indigo-100 lg:flex">
          <div className="w-full m-12 bg-center bg-no-repeat bg-contain xl:m-16" style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}>
          </div>
        </div>
      </div>
    </div>
  )
}
