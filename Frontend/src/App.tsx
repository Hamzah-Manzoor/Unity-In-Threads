import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../src/Components/SignUp/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' Component={Signup}></Route>
            
          
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
