import { createContext, useContext, useState } from "react"

const CartContext = createContext()

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{cart, setCart}}>
        {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if(!context)
        throw new Error("Nem található CartContext vagy rossz helyen hívod meg!")
    
    return context;
}

export default CartContextProvider