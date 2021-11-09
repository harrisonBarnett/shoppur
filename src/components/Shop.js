import {useState} from 'react'
import productInfo from '../static/productInfo'
const Shop = props => {

    const ShopItem = props => {
        const [qty, setQty] = useState(1)

        const increaseQty = () => {
            setQty(qty + 1)
        }
        const decreaseQty = () => {
            if(qty === 0){
                return //    
            }
            setQty(qty - 1)
        }
        return(
            <div className='shop-item'>
                <div className='shop-item-header'>
                    <p>{props.name}</p><p>{props.price}.00</p>
                </div>
                <div className='shop-item-img'
                     style={{backgroundImage: `url(${props.image})` }}></div>
                <p>{props.description}</p>
                <div className='shop-item-btn-group'>
                    <button onClick={decreaseQty}>-</button>
                    <div className='qty-counter'>{qty}</div>
                    <button onClick={increaseQty}>+</button>
                </div>
                <button onClick={()=> {props.addToCart(
                                                      props.name, 
                                                      props.image, 
                                                      props.price,
                                                      qty,
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
            <div id='shop-item-grid'>
                {mappedItems}
            </div>
            
        </div>
    )
}
export default Shop