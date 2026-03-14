import React, { useEffect } from 'react'
import { useCartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Card({ data }) {

    const [cart, updateCart] = useCartContext()

    function addToCart(thumbnail, title, price) {

            const cartCopy = [...cart]

            const availableItem = cartCopy.findIndex(item => item.title === title)

            console.log(availableItem)

            if (availableItem === -1) {
                updateCart(prevState => ([...prevState, {thumbnail, title, price, quantity: 1}]))
            } else if (availableItem > -1) {
                cartCopy[availableItem].quantity = cartCopy[availableItem].quantity+1
                updateCart(cartCopy)
            }


    }

    useEffect(() => {
        console.log(cart)
    }, [cart])

  return (
    <div className='card' onClick={() => {addToCart(data.thumbnail, data.title, data.price)}}>
        <div className='top'>
            <div className='img'>
                <img src={data.thumbnail} alt={data.title} />
            </div>
        </div>
        <div className='bottom'>
            <h2 className='title'>{data.title}</h2>
            <p className='price'>${data.price}</p>
            <div className='desc'>
                <ul className='info'>
                    <li>{data.stock}</li>
                    <li>{data.sku}</li>
                </ul>
                <div className='review'>
                    <FontAwesomeIcon icon={faStar} style={{fontSize: 12, color: '#5D8096'}} />
                    <span>{data.rating}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card