import ImageViewer from '../ImageViewer/ImageViewer'
import minus from "../../assets/icon-minus.svg"
import plus from "../../assets/icon-plus.svg"
import { useCart } from '../../context/CartContextProvider'


const Product = () => {
    const {addItemToCart} = useCart()

    const addToCart = () => {
        addItemToCart({name: "Fall Limited Edition Sneakers", price: 125})
    }

    return (
        <section>
            <ImageViewer />
            <div>
                <h3>Sneaker Company</h3>

                <h1>Fall Limited Edition Sneakers</h1>
                <p>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>

                <div className="price">
                    <strong> $125.00</strong>
                    <span className='discount'>50%</span>
                </div>
                <strong className="oldPrice">$250.00</strong>


                <div className="buySection">
                    {/* <div className="quantity">
                        <button><img src={minus} alt="minus" /></button>
                        <strong>0</strong>
                        <button><img src={plus} alt="plus" /></button>
                    </div> */}

                    <button onClick={addToCart}>Add to cart</button>
                </div>
            </div>
        </section>
    )
}

export default Product