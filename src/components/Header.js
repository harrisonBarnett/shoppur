import {useLocation} from 'react-router-dom'
import Navigation from './Navigation'
const Header = () => {
    const path = useLocation.pathname
    return(
        <div 
        id='header'
        className={path === '/' ? 'header-home' : 'header-else'}>
            <h1>Header</h1>
            <Navigation />
        </div>
    )
}
export default Header
