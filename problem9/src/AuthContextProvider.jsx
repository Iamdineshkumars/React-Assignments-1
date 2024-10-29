import { createContext, useState } from "react";
import axios from "axios";
export const authentication=createContext()

export const AuthContextProvider = ({children})=>{
    const[state,setState] = useState({
        isAuth:false,
        loading:false,
        error:null,
        token:""
    })
    const login = async (email,password)=>{
        setState({...state,loading:true, error:null});
        try{
            const response = await axios.post("https://reqres.in/api/login",{
                email,
                password,
            });
            setState({
                isAuth: true,
                loading:false,
                error:null,
                token:response.data.token,
            })
        }
        catch (error) {
            setState({
                ...state,
                loading:false,
                error:"failed to authenticate.please try again."
            })
        }
    }
        const logout = () =>{
            setState({
                isAuth:false,
                loading:false,
                error:null,
                token:""
            })
        }
    
    return(
        <authentication.Provider value={{...state,login,logout}}>
            {children}
        </authentication.Provider>
    )
}