
const Cart = props => {
    const mapped = props.cartContents.map(item => {
        return <div className='shop-item'>
                    <li>{item.name}</li>
                    <li>{item.quantity}</li>
                </div>
    })
    return(
        <>
            <h1>cart</h1>
            {mapped}
        </>
    )
}
export default Cart