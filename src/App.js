import {useEffect, useState} from 'react'
import {Route, NavLink} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'

import './static/App.css'

const App = ()=> {
  const [cartContents, setCartContents] = useState([])
  const [cartSize, setCartSize] = useState(0)
  const [cartTotalCost, setCartTotalCost] = useState(0)

  const addToCart = (name, image, price, quantity, description) => {
    if(cartContents.length == 0) {
      const tempCartContents = cartContents
      tempCartContents.push({
        name: name,
        image: image,
        price: price,
        quantity: quantity,
        description: description
      })
      setCartContents(tempCartContents)
      setCartSize(quantity)
    } else {
      const tempCartContents = cartContents
      var tempItem = tempCartContents.filter(tempName => {return tempName.name === name})[0]
      var newCartContents = tempCartContents.filter(tempName => {return tempName.name !== name})
      if(tempItem) {
        tempItem.quantity += quantity
        newCartContents.push(tempItem)
      } else {
        newCartContents.push({
          name: name,
          image: image,
          price: price,
          quantity: quantity,
          description: description
        })
      }
      setCartContents(newCartContents)
      setCartSize(cartSize + quantity)
    }
  }


  return (
    <>
      <Header />
      <div id='page-content'>
        <NavLink 
        to='/cart'
        id='cart-btn'>
          <button>cart</button>
          {cartSize}
        </NavLink>
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
