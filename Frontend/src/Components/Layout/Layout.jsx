import React from 'react'
import Navabr from '../Navbar/Navabr'
import Sidebar from '../Sidebar/Sidebar_1'

export default function Layout({children}) {
  return (
    <div className="grid grid-cols-5">

      <div className="col-span-5">
        <Navabr/>
      </div>

      <div className="col-span-1 bg-gray-800">
        <Sidebar/>
      </div>

      <div className="col-span-5 lg:col-span-4 pt-14 bg-gray-800 min-h-screen h-full">
        {children}
      </div>

       {/* sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 */}

  </div>
  

    )
}

