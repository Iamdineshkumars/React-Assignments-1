import { useState } from 'react'
import CartPage from './CartPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CartPage />
    </>
  )
}

export default App
