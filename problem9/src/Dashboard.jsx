import React from 'react'
import { authentication } from './AuthContextProvider'
import {useContext} from 'react'
const Dashboard = () => {
   const {token,logout} =useContext(authentication)
  return (
    <div>
        <h1>Token:{token}</h1>
        <button onClick={logout}>logout</button>
    </div>
  )
}

export default Dashboard