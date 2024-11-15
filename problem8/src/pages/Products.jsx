import React, { useEffect, useState } from 'react'
import Styles from '../pages/products.module.css'
const Products = () => {
  const [state,setState]=useState([])
  const dataApi = async ()=>{
   
    let response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products');
    let data = await response.json()
    //console.log(data.data)
    setState(data.data)
  }
  useEffect(()=>{
   dataApi()
  })
  
  return (
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",rowGap:"10px",columnGap:"10px;",border:"1px solid green"}}>
      {state.map((items)=>{
         return <div key={items.id} >
          <div style={{display:"flex",flexDirection:"column",flexWrap:"wrap",rowGap:"1px",columnGap:"100px;"}}>
      
            <img src={items.image}/>
            <h3>{items.title}</h3>
            <p>{items.price}</p>
            </div>
          </div>
      })}
    </div>
  )
}

export default Products