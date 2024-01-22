import React from 'react'
import Navabr from '../Navbar/Navabr'
import Sidebar from '../Sidebar/Sidebar_1'
import Sidebar_1 from '../Sidebar/Sidebar_1'

export default function Layout({children}) {
  return (
    <div className="grid grid-cols-5">

      <div className="col-span-5">
        <Navabr/>
      </div>

      <div className="col-span-1 bg-gray-800">
        <Sidebar_1></Sidebar_1>
      </div>

      <div className="h-full min-h-screen col-span-5 bg-gray-800 lg:col-span-4 pt-14">
        {children}
      </div>

       {/* sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 */}

  </div>
  

    )
}

