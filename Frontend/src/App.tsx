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
import React from 'react'
import CustomOrder from './Components/CustomOrder/CustomOrder'

function App() {

  return (
    <>
      <BrowserRouter>
  <SidebarState>
    <Retail_User_State>
      <Routes>
        <Route path='/' element={<Signup></Signup>} />
        <Route path='/products' element={<Layout><Products /></Layout>} />
        <Route path="/products/:productId" element={<Layout><ProductDetailsPage /></Layout>} />
        <Route path="/products/add-product" element={<Layout><AddProduct /></Layout>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/products1' element={<Layout><Products /></Layout>} />
        <Route path='/ReturnsandExchange' element={<Layout><Returns /></Layout>} />
        <Route path='/CustomOrder' element={<Layout><CustomOrder /></Layout>} />
      </Routes>
    </Retail_User_State>
  </SidebarState>
</BrowserRouter>
    </>
  )
}

export default App