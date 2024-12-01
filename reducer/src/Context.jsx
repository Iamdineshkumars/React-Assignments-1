import { createContext, useEffect } from "react";
import axios from  "axios"
export const dataContext = createContext()


const Context = ({children,})=>{
   
    
    

    return(
        <dataContext.Provider>
            {children}
        </dataContext.Provider>
    )
}
export default Context