import React, { useContext } from 'react'
import { authcontext } from '../context/AuthContextProvider'
import { Link, Navigate, NavLink } from 'react-router-dom'

const ProtectRoute = ({children}) => {
    const {isAuth} =useContext(authcontext)
    
   if (!isAuth){
    return <Navigate to = '/products'/>
   }
   return children
  //return <Navigate to='/products' />
}

export default ProtectRoute