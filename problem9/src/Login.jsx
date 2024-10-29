import React from 'react'
import { authentication } from './AuthContextProvider'
import {useState, useContext} from 'react'
const Login = () => {
  const {login,loading,error} = useContext(authentication)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  function handleSubmit(event){
      event.preventDefault()
      login(email,password)
  }
  return (
    <div>
          <form onSubmit={handleSubmit}>
            <input type='email' placeholder='Enter Email' value={email} onChange={(event)=>setEmail(event.target.value)} required/>
      
            <input type="password" placeholder='Enter Password' value={password} onChange ={(event)=>setPassword(event.target.value)} required/>
            <button type="submit">{loading ? "loggin in..":"login"}</button>       
              </form>
              {error && <p>{error}</p>}
    </div>
  )
}

export default Login