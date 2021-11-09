import {useEffect, useState} from 'react'
const Cart = props => {
    const [cartContents, setCartContents] = useState(props.cartContents)
    const [totalPrice, setTotalPrice] = useState(0)
    const [cartSize, setCartSize] = useState(props.cartSize)

    useEffect(()=>{
        setTotalPrice(calcTotalPrice)
    }, cartContents)
    const calcTotalPrice = () => {
        let totalPrice = 0
        cartContents.forEach(product => {
            const grossPrice = product.quantity * product.price
            totalPrice += grossPrice
        })
        return totalPrice
    }

    const CartItem = props => {
        const [qty, setQty] = useState(props.quantity)

        const increaseQty = (name) => {
            var newCartContents = cartContents
            var tempItem = newCartContents.filter(tempName => {return tempName.name === name})[0]
            const itemIndex = newCartContents.indexOf(tempItem)
            tempItem.quantity += 1
            setQty(qty + 1)
            newCartContents.splice(itemIndex, 1, tempItem)
            setCartContents(newCartContents)
            props.updateCart(newCartContents, 1)
        }
        const decreaseQty = (name) => {
            var newCartContents = cartContents
            var tempItem = newCartContents.filter(tempName => {return tempName.name === name})[0]
            const itemIndex = newCartContents.indexOf(tempItem)
            if(props.quantity === 1){
                newCartContents = newCartContents.filter(tempName => {return tempName.name !== name})
                setCartContents(newCartContents)
                props.updateCart(newCartContents, -1)
            } else {
                tempItem.quantity -= 1
                setQty(qty - 1)
                newCartContents.splice(itemIndex, 1, tempItem)
                setCartContents(newCartContents)
                props.updateCart(newCartContents, -1)
            }
        }
        return(
            <div className='cart-item'>
                <p>{props.name}</p>
                <div className='cart-item-content'>
                    <div className='cart-item-img'
                        style={{backgroundImage: `url(${props.image})`}}>
                    </div>
                    <div className='cart-price-group'>
                        <p>price: {props.price}.00</p>
                        <p>qty: {props.quantity}</p>
                        <p>total: {props.price * qty}.00</p>
                    </div>
                    <div className='cart-item-btn-group'>
                        <button onClick={()=>{decreaseQty(props.name)}}>-</button>
                        <div className='qty-counter'>{qty}</div>
                        <button onClick={()=>{increaseQty(props.name)}}>+</button>
                    </div>
                </div>
                
                
            </div>
        )
    }

    const mappedItems = cartContents.map(product => {
        return <CartItem 
                key={product.name}
                name={product.name}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                totalPrice={product.totalPrice}
                description={product.description}
                updateCart={props.updateCart}/>
    })
    return(
        <div id='cart'>
            <div id='cart-meta-container'>
                <h1>your cart</h1>
                <h2>items: {cartSize}</h2>
                <h2 className='cart-bg-yellow'>total: {totalPrice}.00</h2>
            </div>
            
            <div id='cart-item-list'>
                {mappedItems}
            </div>
        </div>

    )
}
export default Cart