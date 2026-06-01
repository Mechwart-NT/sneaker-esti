import React, { useContext, useState } from 'react'
import { CartContext } from '../../App'
import cartIcon from "../../assets/icon-cart.svg"
const Navbar = () => {
  const ctx = useContext(CartContext)
  const [cartIsOpen, setCartIsOpen] = useState(false)
  return (
    <nav>
      <a>Collections</a>
      <a>Men</a>
      <a>Women</a>
      <a>About</a>
      <a>Contact</a>
      <div className='cart'>
        {ctx.cart.length > 0 && <span>{ctx.cart.length}</span>}
        <img onClick={()=>setCartIsOpen(prev => !prev)} src={cartIcon}/>
        {cartIsOpen && <div>
          <h2>Cart</h2>
          <ul>
            {ctx.cart.map(element => <li>{element.name} - {element.price}$</li>)}
          </ul>
        </div>}
      </div>
    </nav>
  )
}

export default Navbar