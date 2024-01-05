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
>>>>>>> origin/Muneeb-feature-Auth

function App() {

  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
      {/* <Sidebar></Sidebar> */}
        {/* <Navabr></Navabr> */}
          <Routes>
            <Route path='/' Component={Signup}></Route>
            <Route path='/login' Component={Login}></Route>
            <Route path='/products' Component={Products}></Route>
            <Route path="/products/:productId" Component={ProductDetailsPage}></Route>
=======
      <Retail_User_State>
      <SidebarState>
        
        

      
        <Routes>
        <Route path='/' Component={Signup}></Route>
            <Route path='/login' Component={Login}></Route>
        <Route
            path='/ReturnsandExchange'
            element={ // 'element' should be used instead of 'Component'
              <Layout>
                <Returns />
              </Layout>
            }
          />
            

>>>>>>> origin/Muneeb-feature-Auth
            
            
          
          </Routes>
          </SidebarState>
          </Retail_User_State>
      </BrowserRouter>
    </>
  )
}

export default App
