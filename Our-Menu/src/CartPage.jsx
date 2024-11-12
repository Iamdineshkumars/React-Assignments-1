import React from 'react'

const CartPage = (items) => {
  return (
      <div className="section2">
        <img src ={items.image} className="image"/>
        <div className="section3">
        <div className="title">
        <h3>{items.title}</h3>
        <p className = "price_btn">{items.price}</p>
        </div>

        <p className="para">{items.discription}</p>
        </div>
    </div>
  )
}

export default CartPage