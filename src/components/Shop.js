import {useState} from 'react'
import productInfo from '../static/productInfo'
const Shop = props => {

    const ShopItem = props => {
        const[qty, setQty] = useState(1)

        const increaseQty = () => {
            setQty(qty + 1)
        }
        const decreaseQty = () => {
            if(qty === 0){
                return //    
            }
            setQty(qty - 1)
        }
        const handleValueChange = (e)=> {
            setQty(e.target.value)
        }
        return(
            <div className='shop-item'>
                <p>{props.name}</p>
                <p>{props.image}</p>
                <p>{props.price}</p>
                <p>{props.quantity}</p>
                {/* <p>{props.totalPrice}</p> */}
                <p>{props.description}</p>
                <button onClick={decreaseQty}>-</button>
                <div>{qty}</div>
                <button onClick={increaseQty}>+</button>
                <button onClick={()=> {props.addToCart(
                                                      props.name, 
                                                      props.image, 
                                                      props.price,
                                                      qty,
                                                     //props.totalPrice,
                                                      props.description)}}>add to cart</button>
            </div>
        )
    }

    const mappedItems = productInfo.map(product => {
        return <ShopItem 
                key={product.name}
                name={product.name}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                totalPrice={product.totalPrice}
                description={product.description}
                addToCart={props.addToCart}/>
    })
    return(
        <div id='shop'>
            {mappedItems}
        </div>
    )
}
export default Shop