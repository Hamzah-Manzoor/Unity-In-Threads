import React, { useContext, useEffect, useState } from 'react'
import sidebar_context from '../../context/Sidebar/Sidebar';
import Retail_User_Context from '../../context/Retail_User_Context/Retail_User';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Navabr() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const context = useContext(sidebar_context)
  const retail_context = useContext(Retail_User_Context);
  const [Name, setName] = useState("Guest User")
  const [email, setemail] = useState("guestuser@gmail.com")
  const Navigate = useNavigate()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logout = ()=>{
    axios.get('http://localhost:5000/api/retail/logout').then((res)=>{
            console.log(res);
            alert(res?.data?.message);
            retail_context.logout_user()
            Navigate('/login');
    }).catch((err)=>{
            console.log(err);
            alert(err?.response?.data);
    })
}
  useEffect(() => {
    console.log('Retail_Context has changed:', retail_context);
    
    setName(retail_context?.user?.firstName+retail_context?.user?.lastName)
    setemail(retail_context?.user?.email)

  }, [retail_context]); 
  const func = ()=>{
    context.update();
    console.log(context.toggleState);
  }
  
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-gray-800 border-gray-700">
    <div className="px-3 py-3 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start rtl:justify-end">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            onClick={func}
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <a href="#" className="flex ms-2 md:me-24">
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
              Haroon's Designer
            </span>
          </a>
        </div>
        
        <div className="flex">
          <div className="flex ms-3">
            <div>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600"
                aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </button>
            </div>
            {isDropdownOpen && (
                 <div className="absolute z-50 w-48 mt-10 divide-y rounded shadow right-2 bg-gray-700 divide-gray-600">
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-white" role="none">
                  {Name}
                </p>
                <p className="text-sm font-medium truncate text-gray-300" role="none">
                  {email}
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white" role="menuitem">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white" role="menuitem">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white" role="menuitem">
                    Earnings
                  </a>
                </li>
                <li>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-300 hover:bg-gray-600 hover:text-white"
                  role="menuitem"
                  onClick={logout}
                >
                  Sign out
                </Link>

                </li>
              </ul>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </nav>
    )
}
