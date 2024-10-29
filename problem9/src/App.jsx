import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Dashboard'
import Login from './Login'
import { authentication } from './AuthContextProvider'
import {useContext} from 'react'
function App() {

    const {isAuth} =useContext(authentication)
    
     
  return (
    <>
      {isAuth === true ? <Dashboard/> : <Login/>}
      
    </>
  )
}

export default App
