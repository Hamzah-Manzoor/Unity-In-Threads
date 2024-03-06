import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../src/Components/SignUp/Signup'
import Login from './Components/Login/Login'
import Products from './Components/ProductsPage/ProductsMainPage'
import AddProduct from './Components/ProductsPage/AddProduct'
import NewBill from './Components/NewBill/NewBill'
import UpdateBill from './Components/UpdateBill/UpdateBill'

import TaskManager from './Components/TaskManagerProduction/TaskManager'

import ProductDetailsPage from './Components/ProductsPage/ProductDetailsPage'

import Layout from './Components/Layout/Layout'
import Returns from './Components/Returns/Returns'
import SidebarState from './context/Sidebar/SidebarState'
import Retail_User_State from './context/Retail_User_Context/Retail_User_State'
import CustomOrder from './Components/CustomOrder/CustomOrder'
import Dashboard_retail from './Components/Dashboard/Dashboard_retail'
import Dashboard_production from './Components/Dashboard/Dashboard_production'
import { useContext } from 'react'
import Login_Type_Context from './context/Login_Type_Context/Login_Type_Context'
import Login_Type_State from './context/Login_Type_Context/Login_Type_State'
import SetProductRate from './Components/ProductRate/SetProductRate'
import UpdateProductRate from './Components/ProductRate/UpdateProductRate'
import ProductSize from './Components/ProductSize/ProductSize'

function App() {
  const type = useContext(Login_Type_Context);
  console.log(type)


  return (
    <>
      <BrowserRouter>
        <SidebarState>
          <Retail_User_State>
          <Login_Type_State>
            <Routes>

              <Route path='/' Component={Signup}></Route>
              <Route path='/login' Component={Login}></Route>
              

              {/* Retail Modules */}
              <Route path='/retail/dashboard'
                  element={
                    <Layout>
                      <Dashboard_retail/>
                    </Layout>
                  }
              />
              <Route path='/retail/custom-order'
                  element={ // 'element' should be used instead of 'Component'
                    <Layout>
                      <CustomOrder></CustomOrder>
                    </Layout>
                  }
              />
              <Route path="/retail/products/:productId" 
                element={
                  <Layout>
                    <ProductDetailsPage/>
                  </Layout>
                }
              />
              <Route path="/retail/add-product" 
                element={
                  <Layout>
                    <AddProduct/>
                  </Layout>
                }
              />
              <Route path="/retail/new-bill" 
                element={
                  <Layout>
                    <NewBill/>
                  </Layout>
                }
              />
              <Route path="/retail/set-product-rate" 
                element={
                  <Layout>
                    <SetProductRate/>
                  </Layout>
                }
              />
              <Route path="/retail/update-product-rate" 
                element={
                  <Layout>
                    <UpdateProductRate/>
                  </Layout>
                }
              />
              <Route path="/retail/product-size" 
                element={
                  <Layout>
                    <ProductSize/>
                  </Layout>
                }
              />
              <Route path="/retail/products"
                  element={
                    <Layout>
                      <Products></Products>
                    </Layout>
                  }
              />
              <Route
                  path="/retail/return-and-exchange"
                  element={
                    <Layout>
                      <Returns />
                    </Layout>
                  }
              />
              <Route
                  path="/retail/update-bill"
                  element={
                    <Layout>
                      <UpdateBill />
                    </Layout>
                  }
              />

              {/* Production Modules */}
              <Route path="/production/task-manager" Component={TaskManager}></Route>
              <Route path='/production/dashboard' Component={Dashboard_production}></Route>
          
            </Routes>
            </Login_Type_State>
          </Retail_User_State>
        </SidebarState>
      </BrowserRouter>
    </>
  )
}

export default App