import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../src/Components/SignUp/Signup'
import Login from './Components/Login/Login'
import Products from './Components/ProductsPage/ProductsMainPage'
import AddProduct from './Components/ProductsPage/AddProduct'
import RecordRetailOrder from './Components/RecordRetailOrder/RecordRetailOrder'

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


function App() {
  const type = useContext(Login_Type_Context);


  return (
    <>
      <BrowserRouter>
        <SidebarState>
          <Retail_User_State>
          <Login_Type_State>
      
        <Routes>
        <Route path='/' Component={Signup}></Route>
        <Route path='/CustomOrder'
            element={ // 'element' should be used instead of 'Component'
              <Layout>
                <CustomOrder></CustomOrder>
              </Layout>
            }
          />
        <Route path="/products/:productId" Component={ProductDetailsPage}></Route>
        <Route path="/products/add-product" Component={AddProduct}></Route>
        <Route path="/record-retail-order" Component={RecordRetailOrder}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='Dashboard/Retail'
            element={ // 'element' should be used instead of 'Component'
              <Layout>
                <Dashboard_retail></Dashboard_retail>
              </Layout>
            }
          />
        {/* <Route path='/Dashboard/Retail' Component={Dashboard_retail}></Route> */}
        <Route path='/Dashboard/Production' Component={Dashboard_production}></Route>
        <Route path='/products'
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


        {/* Production Modules */}
        <Route path="/task-manager" Component={TaskManager}></Route>
            

            
            
          
          </Routes>
          </Login_Type_State>
          </Retail_User_State>
          </SidebarState>


      </BrowserRouter>
    </>
  )
}

export default App