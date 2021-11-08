import {Route, NavLink} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'

import './App.css'

const App = ()=> {
  return (
    <>
      <Header />
      <div id='page-content'>
        <NavLink to='/cart'><button>cart</button></NavLink>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/cart' component={Cart} />
      </div>
      <Footer />
    </>
  )
}

export default App;
