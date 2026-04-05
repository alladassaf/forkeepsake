import React, { useEffect, useRef } from 'react'
import { useCartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Card({ data }) {

    const [cart, updateCart] = useCartContext()
    const qtyRef = useRef()

    function addToCart(thumbnail, title, price, value) {

            const cartCopy = [...cart]

            const availableItem = cartCopy.findIndex(item => item.title === title)

            console.log(qtyRef)
            console.log(availableItem)

            if (availableItem === -1) {
                updateCart(prevState => ([...prevState, {thumbnail, title, price, quantity: value}]))
            } else if (availableItem > -1) {
                cartCopy[availableItem].quantity = value
                updateCart(cartCopy)
            }


    }

    useEffect(() => {
        console.log(cart)
    }, [cart])

  return (
    <div className='card'>
        <div className='top'>
            <div className='img'>
                <img src={data.thumbnail} alt={data.title} />
            </div>
        </div>
        <div className='bottom'>
            <h2 className='title'>{data.title}</h2>
            <p className='price'>${data.price}</p>
            <div className='desc'>
                <p className='stock'>{data.stock}</p>
                <div className='counter_container'>
                    <input type='number' className='count' min='1' onChange={(e) => {addToCart(data.thumbnail, data.title, data.price, e.target.value)}}/>
                </div>
            </div>
            <div className='card_footer'>
                <span className='sku'>{data.sku}</span>
                <div className='review'>
                    <FontAwesomeIcon icon={faStar} style={{fontSize: '0.7rem', color: '#fff'}} />
                    <span>{data.rating}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card