import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../src/Components/SignUp/Signup'
import Login from './Components/Login/Login'
import Products from './Components/ProductsPage/ProductsMainPage'
import AddProduct from './Components/ProductsPage/AddProduct'

import ProductDetailsPage from './Components/ProductsPage/ProductDetailsPage'

import Layout from './Components/Layout/Layout'
import Returns from './Components/Returns/Returns'
import SidebarState from './context/Sidebar/SidebarState'
import Retail_User_State from './context/Retail_User_Context/Retail_User_State'
import Dashboard_retail from './Components/Dashboard/Dashboard_retail'
import Sidebar from './Components/Sidebar/Sidebar'


function App() {

  return (
    <>
      <BrowserRouter>
        <SidebarState>
          <Retail_User_State>

      
        <Routes>
        <Route path='/' Component={Signup}></Route>
        <Route path='/products' Component={Products}></Route>
        <Route path="/products/:productId" Component={ProductDetailsPage}></Route>
        <Route path="/products/add-product" Component={AddProduct}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/Dashboard' Component={Dashboard_retail}></Route>
        <Route path="/Sidebar" Component={Sidebar}></Route>
        <Route path='/products1'
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
          </Retail_User_State>
          </SidebarState>


      </BrowserRouter>
    </>
  )
}

export default App