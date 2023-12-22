import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../src/Components/SignUp/Signup'
import Login from './Components/Login/Login'

import SidebarState from './context/Sidebar/SidebarState'
import Returns from './Components/Returns/Returns'
import Layout from './Components/Layout/Layout'

function App() {

  return (
    <>
      <BrowserRouter>
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
            

            
            
          
          </Routes>
          </SidebarState>
      </BrowserRouter>
    </>
  )
}

export default App
