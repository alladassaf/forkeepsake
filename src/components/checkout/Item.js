import React, { useEffect } from 'react'
import { useCartContext } from '../../context/CartContext'
import './checkout.css'

function Item({ data }) {

    const [cart, updateCart] = useCartContext()

    function updateQuantity(evt, qty, title) {
            const cartCopy = [...cart]

            const availableItem = cartCopy.findIndex(item => item.title === title)

            console.log(availableItem)

            if (availableItem > -1) {
                cartCopy[availableItem].quantity = parseInt(evt.value)
                if (cartCopy[availableItem].quantity === 0) {
                    return
                }
                updateCart(cartCopy)
            }
    }

    function removeItem(title) {

        const cartCopy = [...cart]

        const removeChosenOneUpdate = cartCopy.filter(item => item.title !== title)

        updateCart(removeChosenOneUpdate)

    }

    useEffect(() => {
        console.log(cart)
    }, [cart])

  return (
    <div className='item'>
        <div className='img'>
            <img src={data.thumbnail} alt={data.title} />
        </div>
        <div className='details'>
            <p className='title'>{data.title}</p>
            <p className='price'>${data.price}</p>
        </div>
        <div className='actions'>
            <input type='number' 
               value={data.quantity} 
               onChange={(e) => {updateQuantity(e.target, data.quantity, data.title)}} 
               id='quantity' />
            <button className='delete' onClick={() => {removeItem(data.title)}}>DEL</button>
        </div>
        
    </div>
  )
}

export default Item