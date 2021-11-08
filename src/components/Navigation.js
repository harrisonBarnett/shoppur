import {NavLink} from 'react-router-dom'
const Navigation = () => {
    return(
        <div id='navbar'>
            <NavLink exact to='/'>home</NavLink>
            <NavLink to='/shop'>shop</NavLink>
        </div>
    )
}
export default Navigation