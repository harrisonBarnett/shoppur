import {useEffect, useState} from 'react'
import {Route, NavLink} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Product from './components/Product'
import productList from './static/productList'

import './static/App.css'

const App = ()=> {
  const [products, setProducts] = useState(productList)
  const [cartContents, setCartContents] = useState([])
  const [cartSize, setCartSize] = useState(0)

  const addToCart = (item) => {
    const tempArr = cartContents
    tempArr.push(item)
    setCartContents(tempArr)
  }


  return (
    <>
      <Header />
      <div id='page-content'>
        <NavLink to='/cart'><button>cart</button>{cartSize}</NavLink>
        <Route exact path='/' component={Home} />
        <Route path='/shop' 
               component={ ()=> <Shop 
                                addToCart={addToCart}/> } />
        <Route path='/cart' 
               component={ ()=> <Cart 
                                cartContents={cartContents}/> } />
      </div>
      <Footer />
    </>
  )
}

export default App;
