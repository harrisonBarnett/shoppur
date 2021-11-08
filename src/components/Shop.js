const Shop = props => {
    return(
        <div id='shop'>
            <button 
            onClick={()=> {props.addToCart('d')}}>add to cart</button>
        </div>
    )
}
export default Shop