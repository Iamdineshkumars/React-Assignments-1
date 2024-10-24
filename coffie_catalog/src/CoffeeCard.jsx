import React from 'react'
import Styles from './CoffeeCard.module.css'
const CoffeeCard = ({coffee}) => {
  console.log(coffee)
  return (
    <div className={Styles.main}>
      <div className = {Styles.image}>
    <img src={coffee.image} style={{width:"300px",height:"300px"}}></img>
    </div>
    <div className = {Styles.content}>
    <h1>{coffee.title}</h1>
    <p>{coffee.price}</p>
    <p className={Styles.para}>{coffee.description}</p>
    <li>{coffee.ingredients}</li>
    </div>
    </div>
  )
}

export default CoffeeCard
