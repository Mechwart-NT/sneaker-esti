import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext()

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([])

  useEffect(()=>{
    const localCart = localStorage.getItem("cart")
    if(localCart){
      setCart(JSON.parse(localCart))
    }
  },[])

  const saveToLocalStorage = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const addItemToCart = (item) => {
    let newCart = [...cart, item]
    setCart(newCart)
    saveToLocalStorage(newCart)
  }

  const deleteItemFromCart = (id) => {
    let newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
    saveToLocalStorage(newCart)
  }

  return (
    <CartContext.Provider value={{cart, setCart, addItemToCart, deleteItemFromCart}}>
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