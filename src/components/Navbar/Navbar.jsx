import {useState } from 'react'
import cartIcon from "../../assets/icon-cart.svg"
import { useCart } from '../../context/CartContextProvider'
const Navbar = () => {
  const {cart} = useCart()
  const [cartIsOpen, setCartIsOpen] = useState(false)
  return (
    <nav>
      <a>Collections</a>
      <a>Men</a>
      <a>Women</a>
      <a>About</a>
      <a>Contact</a>
      <div className='cart'>
        {cart.length > 0 && <span>{cart.length}</span>}
        <img onClick={()=>setCartIsOpen(prev => !prev)} src={cartIcon}/>
        {cartIsOpen && <div>
          <h2>Cart</h2>
          <ul>
            {cart.map(element => <li>{element.name} - {element.price}$</li>)}
          </ul>
        </div>}
      </div>
    </nav>
  )
}

export default Navbar