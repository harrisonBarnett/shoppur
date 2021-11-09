import {useLocation} from 'react-router-dom'
import Navigation from './Navigation'
const Header = () => {
    const path = useLocation().pathname
    return(
        <div 
        id='header'
        className={path === '/' ? 'header-home' : 'header-else'}>
            <Navigation />
        </div>
    )
}
export default Header
