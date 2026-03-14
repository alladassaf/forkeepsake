import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext(undefined)

export function CartProvider({ children }) {

  const [cart, updateCart] = useState([])

  return (
    <CartContext.Provider value={[cart, updateCart]}>
        { children }
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)