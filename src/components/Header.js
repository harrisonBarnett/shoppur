import {useLocation, NavLink} from 'react-router-dom'
import Navigation from './Navigation'
import Cart from '../static/images/icons/cart.svg'
const Header = props => {
    const path = useLocation().pathname
    return(
        <div 
        id='header'>
            <h1>logo</h1>
            <Navigation />
            <NavLink to='/cart' id='cart-btn'>
                <img src={Cart}></img>
                <p>{props.cartSize}</p>
            </NavLink>
        </div>
    )
}
export default Header
