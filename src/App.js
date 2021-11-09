import {useEffect, useState} from 'react'
import {Route, NavLink, useLocation} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'

import './static/App.css'

const App = ()=> {
  const [cartContents, setCartContents] = useState([])
  const [cartSize, setCartSize] = useState(0)

  useEffect(()=>{
    setCartSize(calcCartSize)
  }, [cartContents])
  
  const calcCartSize = () => {
    let total = 0
    cartContents.forEach(product => {
      total += product.quantity
    })
    return total
  }
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
      // setCartSize(cartSize + quantity)
    }
  }
  const updateCart = (newCartContents, amt) => {
    setCartContents(newCartContents)
    setCartSize(cartSize + amt)
  }

  return (
    <>
      <Header cartSize={cartSize}/>
      <div id='page-content'>
        <Route exact path='/' component={Home} />
        <Route path='/shop' 
               component={ ()=> <Shop 
                                addToCart={addToCart}/> } />
        <Route path='/cart' 
               component={ ()=> <Cart 
                                cartSize={cartSize}
                                cartContents={cartContents}
                                updateCart={updateCart}/> } />
      </div>
      <Footer />
    </>
  )
}

export default App;
