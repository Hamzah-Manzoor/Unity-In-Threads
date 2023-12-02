import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../src/Components/SignUp/Signup'
import Login from './Components/Login/Login'
import Navabr from './Components/Navbar/Navabr'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navabr></Navabr>
          <Routes>
            <Route path='/' Component={Signup}></Route>
            <Route path='/login' Component={Login}></Route>
            
            
          
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
