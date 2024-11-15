import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
import Login from '../pages/Login'
import PrivateRoute from './ProtectRoute'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<PrivateRoute>
                                            <Products/>
                                         </PrivateRoute>}/>
      </Routes>
    </>
  )
}

export default AllRoutes