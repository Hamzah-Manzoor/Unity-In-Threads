import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../src/Components/SignUp/Signup'
import Login from './Components/Login/Login'
import Products from './Components/ProductsPage/ProductsMainPage'
import Navabr from './Components/Navbar/Navabr'
import Sidebar from './Components/Sidebar/Sidebar'
import ProductDetailsPage from './Components/ProductsPage/ProductDetailsPage'

function App() {

  return (
    <>
      <BrowserRouter>
      {/* <Sidebar></Sidebar> */}
        {/* <Navabr></Navabr> */}
          <Routes>
            <Route path='/' Component={Signup}></Route>
            <Route path='/login' Component={Login}></Route>
            <Route path='/products' Component={Products}></Route>
            <Route path="/products/:productId" Component={ProductDetailsPage}></Route>
            
            
          
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
