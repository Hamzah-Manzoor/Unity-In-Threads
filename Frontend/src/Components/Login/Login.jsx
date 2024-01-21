import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Retail_User_Context from '../../context/Retail_User_Context/Retail_User';
import Login_Type_Context from '../../context/Login_Type_Context/Login_Type_Context';

export default function Login() {
  
  const context = useContext(Retail_User_Context)
  const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const type = useContext(Login_Type_Context);


    const Navigate = useNavigate();
  const Login = (e)=>{

    e.preventDefault();
      try {
        const user = {
          email , 
          password , 
        }
        console.log(user)
            axios.post('http://localhost:3000/login', user).then((res)=>{
                console.log(res)
                const user = res?.data?.user
                // context.update(res?.data?.user)
                console.log(user)
                context.update(user)
                Navigate('/retail/dashboard');
                alert("Login Successful")
            }).catch((e)=>{
                console.log(e)
                alert("User Not found")
                
            })
      } catch (error) {
        console.log(error);

      }
      // Navigate('/login')
  }
  const handleModuleChange = (event) => {
    
    console.log(type)
    type.update(event.target.value)
  };
    
  return (
<div className="flex justify-center min-h-screen text-gray-900 bg-gray-100">
      <div className="flex justify-center flex-1 max-w-screen-xl m-0 bg-white shadow sm:m-10 sm:rounded-lg">
        <div className="p-6 lg:w-1/2 xl:w-5/12 sm:p-12">
          
          <div className="flex flex-col items-center mt-12">
            <h1 className="text-2xl font-extrabold xl:text-3xl">Login</h1>
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
        type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}
      />
      
      <div className="relative w-full py-4 pt-6 text-center lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm 
            outline-none appearance-none focus:border-indigo-600" onChange={(e)=>handleModuleChange(e)}>
                <option value={"retail"}>Retail</option>
                <option value={"production"}>Production</option>
            </select>
        </div>
      <button
        className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
        onClick={(e)=>{Login(e)}}
      >
        
        <span>
          Login
        </span>
      </button>
      <p className="mt-6 text-xs text-center text-gray-600">
        I agree to abide by Haroon's Designer
        <a href="#" className="mx-1 border-b border-gray-500 border-dotted mx">
          Terms of Service
        </a>
        and its
        <a href="#" className="mx-1 border-b border-gray-500 border-dotted">
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
