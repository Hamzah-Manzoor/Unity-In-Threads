import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../src/Components/SignUp/Signup'
import Login from './Components/Login/Login'
<<<<<<< HEAD
import Products from './Components/ProductsPage/ProductsMainPage'
import Navabr from './Components/Navbar/Navabr'
import Sidebar from './Components/Sidebar/Sidebar'
import ProductDetailsPage from './Components/ProductsPage/ProductDetailsPage'
=======

import SidebarState from './context/Sidebar/SidebarState'
import Returns from './Components/Returns/Returns'
import Layout from './Components/Layout/Layout'
import Retail_User_State from './context/Retail_User_Context/Retail_User_State'
>>>>>>> 359f1ac (Login_Signup_Backend)

function App() {

  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
      {/* <Sidebar></Sidebar> */}
        {/* <Navabr></Navabr> */}
          <Routes>
            <Route path='/' Component={Signup}></Route>
=======
      <Retail_User_State>
      <SidebarState>
        
        

      
        <Routes>
        <Route path='/' Component={Signup}></Route>
>>>>>>> 359f1ac (Login_Signup_Backend)
            <Route path='/login' Component={Login}></Route>
            <Route path='/products' Component={Products}></Route>
            <Route path="/products/:productId" Component={ProductDetailsPage}></Route>
            
            
          
          </Routes>
<<<<<<< HEAD
=======
          </SidebarState>
          </Retail_User_State>
>>>>>>> 359f1ac (Login_Signup_Backend)
      </BrowserRouter>
    </>
  )
}

export default App
