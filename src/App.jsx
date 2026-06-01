import { createContext, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Product/Product'

export const CartContext = createContext()

const App = () => {
  const [cart, setCart] = useState([])

  return (
    <main>
      <CartContext.Provider value={{cart, setCart}}>
        <Navbar/>
        <Product/>
      </CartContext.Provider>
    </main>
  )
}

export default App