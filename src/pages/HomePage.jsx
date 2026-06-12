import React from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const cartProduct = useSelector((state)=>state.cart.cartItems)
  return (
    <div>
      {
        cartProduct.map((item)=>(
          <div key={item.id}>
            <img src={item.img}></img>
          </div>
        ))
      }
    </div>
  )
}

export default HomePage