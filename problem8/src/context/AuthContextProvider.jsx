import { createContext,useState } from "react";
import axios from 'axios'
import { Navigate, NavLink } from "react-router-dom";
export const authcontext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [isAuth,setIsAuth] = useState({
        isAuth:false
    })
    const login = async(email,password)=>{
         setIsAuth({...isAuth})
        try{
            await axios.post(`https://reqres.in/api/login`,{
                email,
                password
            })
            setIsAuth({
                isAuth:true
            })
            
           isAuth ? alert("login successfull") :alert("login unsuccesfull")
           
        }
        catch(error){
            console.log(error)
        }
    }
    return (
        <authcontext.Provider value={{...isAuth,login}}>
            {children}
        </authcontext.Provider>
    )
}