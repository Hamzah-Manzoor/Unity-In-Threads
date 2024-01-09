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
        <Route path="/record-retail-order" Component={RecordRetailOrder}></Route>
        <Route path='/login' Component={Login}></Route>
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


        {/* Production Modules */}
        <Route path="/task-manager" Component={TaskManager}></Route>
            

            
            
          
          </Routes>
          </Retail_User_State>
          </SidebarState>


      </BrowserRouter>
    </>
  )
}

export default App