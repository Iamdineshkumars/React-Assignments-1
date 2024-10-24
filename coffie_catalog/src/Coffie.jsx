import React from 'react'
import {useState,useEffect} from 'react'
import CoffeeCard from './CoffeeCard'
const Coffie = () => {
    const [coffee,setCoffee]= useState([])
    const [isFetched, setIsFetched] = useState(false);   
       
    const dataFetch = async()=>{
      try{
      let response = await fetch ("http://localhost:8080/coffee")
      let data = await response.json()
    //  console.log(data)
      setCoffee(data)
      setIsFetched(true)
      }
      catch{
          console.log("error")
      }
  }

        useEffect(()=>{
          if(isFetched){
          //
            }    
      },[isFetched])
     function closeButton(){
      isFetched ? setCoffee([]):alert("good")
     }
    
       
     
  return (
    <div>
     <button onClick={dataFetch}>coffee</button>
     <button onClick={closeButton}>clear</button>
     <div>
        {coffee.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
        </div>
    
    </div>
  )
}

export default Coffie

