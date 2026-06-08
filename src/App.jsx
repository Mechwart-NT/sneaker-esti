import Navbar from './components/Navbar/Navbar'
import Product from './components/Product/Product'
import CartContextProvider from './context/CartContextProvider'


const App = () => {
  return (
    <main>
      <CartContextProvider>
        <Navbar/>
        <Product/>
      </CartContextProvider>
    </main>
  )
}

export default App