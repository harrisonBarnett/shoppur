const Cart = props => {
    const mapped = props.cartContents.map(item => {
        return <li>{item}</li>
    })
    return(
        <>
            <h1>cart</h1>
            {mapped}
        </>
    )
}
export default Cart