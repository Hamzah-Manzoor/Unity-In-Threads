import React from 'react'
import Navabr from '../Navbar/Navabr'
import Sidebar from '../Sidebar/Sidebar'

export default function Layout({children}) {
  return (
    <div className="grid grid-rows-[0.25fr,4fr] h-screen">
    {/* Navbar (1/5 height) */}
    <Navabr className="row-span-1"></Navabr>
  
    {/* Grid container for sidebar and content */}
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr,5fr]  row-span-2">
      {/* Sidebar (1/6 width) */}
      <Sidebar className="col-span-1"></Sidebar>
  
      {/* Content (Remaining width) */}
      <div className="col-span-1 overflow-y-auto bg-gray-800">
        {/* Content */}
        {children}
      </div>
    </div>
  </div>
  

    )
}

