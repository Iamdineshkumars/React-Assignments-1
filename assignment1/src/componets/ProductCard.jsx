import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Wrapper from '../assets/home'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  const [data,setData]= useState([])
  const fetchData = async()=>{
    const response = await axios.get(`http://localhost:3000/products`)
    setData(response.data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <Wrapper> 
    <div className='cart_main'>
      {data.map((items)=>{
        return (<Link to={`/product/${items.id}/view`} key={items.id} >
          <div className='cart'>
          <img src={items.images[0]}
          className='images'/>
          <p className='font-style'>{items.price}</p>
          <h3 className='font-style'>{items.title}</h3>
          <p className='font-style'>{items.location}</p>
        </div>
          </Link>)
      })}
    </div>
    </Wrapper>
  )
}

export default ProductCard