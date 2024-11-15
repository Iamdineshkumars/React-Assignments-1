import React, { useContext, useState } from 'react'
import { authcontext } from '../context/AuthContextProvider'
import { Navigate } from 'react-router-dom'
import Styles from '../pages/Login.module.css'
const Login = () => {
    const {isAuth,login} = useContext(authcontext)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    function handleSubmit(event){
        event.preventDefault()
         login(email,password)
    }
    
  
 
  isAuth ? console.log("first time :true") : console.log("second time:false")

  return (
    <div className={Styles.Login}>
        <p>eve.holt@reqres.in</p>
        <p>cityslicka</p>
        <form onSubmit={handleSubmit}>
            <input type='email'
            placeholder='enter email' value={email} onChange={(event)=>setEmail(event.target.value)} className={Styles.email}/><br/>
            <input type='password' 
            placeholder='enterPassword' value={password} onChange={(event)=>setPassword(event.target.value)} className={Styles.password}/> <br/>
            <button type='submit' className={Styles.button}>submit</button>
        
        </form>
    </div>
  )
}

export default Login