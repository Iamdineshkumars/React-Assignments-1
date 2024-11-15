import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { authcontext } from '../context/AuthContextProvider'
import Styles from '../pages/Navbar.module.css'
 const links =[
    {
        path : "/login",
        text : "Login"
    },
    {
        path : "/",
        text :"Home"
    },
    {
        path :"/about",
        text : "About"
    },
    {
        path :"/contact",
        text :"Contact"
    },
    {
        path :"/products",
        text :"Products"
    }
 ]
 
const Navbar = () => {
  const {isAuth} = useContext(authcontext)
  //<p>login status:{!isAuth ? "no":"yes"}</p>
  return (
    <div className={Styles.Navbar}>
     {links.map((link)=>{
        return <NavLink to={link.path} key={link.path} className={Styles.Navbar1}>
            {link.text}
        </NavLink>
     })}
    
    </div>
  )
}

export default Navbar