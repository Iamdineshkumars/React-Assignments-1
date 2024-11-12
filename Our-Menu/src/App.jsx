import CartPage from './CartPage'
import './App.css'
import {Data} from './Data.js'

function App() {
 

  return (
    <div>
      <div className="section1">
        <h1 className='title1'>Our Menu</h1>
        <div className="section_btn">
          <div className='btn'>
        <button className = "btn1">All</button>
        <button className = "btn1">Break fast</button>
        <button className = "btn1">Launch</button>
        <button className = "btn1">Shacks</button>
        </div>
        </div>
        </div>
        <div className="main_section2">
    {Data.map((items)=>{
      return <CartPage key ={items.id} {...items}/>
    })}
  </div>
    
    </div>
  )
}

export default App
