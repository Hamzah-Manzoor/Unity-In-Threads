import React from 'react'
import Navabr from '../Navbar/Navabr'
import Sidebar from '../Sidebar/Sidebar_1'

export default function Layout({children}) {
  return (
    <div className="grid h-screen grid-rows-8">
    {/* Navbar (1/5 height) */}
    <div className="row-span-1">
    <Navabr></Navabr>
    </div>
    {/* Grid container for sidebar and content */}
    <div className="grid grid-cols-1 row-span-7 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
      {/* Sidebar (1/6 width) */}
      <Sidebar className="col-span-1"></Sidebar>
  
      {/* Content (Remaining width) */}
      <div className="col-span-3 bg-gray-800 h-100">
        {/* Content */}
        {children}
      </div>
    </div>
  </div>
  

    )
}

