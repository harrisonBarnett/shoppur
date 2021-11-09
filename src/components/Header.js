import {useLocation, NavLink} from 'react-router-dom'
import Navigation from './Navigation'
import Cart from '../static/images/icons/cart.svg'
import Logo from '../static/images/logo.png'
const Header = props => {
    const path = useLocation().pathname
    return(
        <div 
        id='header'>
            <img src={Logo} id='header-logo'></img>
            <Navigation />
            <NavLink to='/cart' id='cart-btn' className='cart-btn'>
                <img src={Cart}></img>
                <p>{props.cartSize}</p>
            </NavLink>
        </div>
    )
}
export default Header
