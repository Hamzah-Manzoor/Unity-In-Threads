import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../src/Components/SignUp/Signup'
import Login from './Components/Login/Login'

import SidebarState from './context/Sidebar/SidebarState'
import Returns from './Components/Returns/Returns'
import Layout from './Components/Layout/Layout'
import Retail_User_State from './context/Retail_User_Context/Retail_User_State'

function App() {

  return (
    <>
      <BrowserRouter>
      <Retail_User_State>
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
          </Retail_User_State>
      </BrowserRouter>
    </>
  )
}

export default App
