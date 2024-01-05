import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../src/Components/SignUp/Signup'
import Login from './Components/Login/Login'
<<<<<<< HEAD
import Products from './Components/ProductsPage/ProductsMainPage'

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
            <Route path='/login' Component={Login}></Route>
            <Route
            path='/products1'
            element={ // 'element' should be used instead of 'Component'
              <Layout>
                <Products></Products>
              </Layout>
            }
          />
        <Route
            path='/ReturnsandExchange'
            element={ // 'element' should be used instead of 'Component'
              <Layout>
                <Returns />
              </Layout>
            }
          />
            

            
            
          
          </Routes>
<<<<<<< HEAD
=======
          </SidebarState>
          </Retail_User_State>
>>>>>>> 359f1ac (Login_Signup_Backend)
          </Retail_User_State>
          </SidebarState>


      </BrowserRouter>
    </>
  )
}

export default App
