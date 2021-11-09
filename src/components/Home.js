import {NavLink} from 'react-router-dom'
const Home = ()=> {
    return(
    <div id='homepage'>
        <div id='homepage-welcome'></div>
        <h2>products that shape the world around you</h2>
        <div id='homepage-accent'>
            <NavLink to='/shop'><div id='homepage-accent-btn'><p>find your reason</p></div></NavLink>
        </div>
    </div>
    )
}
export default Home