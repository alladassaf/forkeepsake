import React from 'react'
import { useCartContext } from '../../context/CartContext'
import Item from './Item'
import Shipping from './Shipping'
import CardDetails from './CardDetails'
import './checkout.css'

function Checkout() {

    const [cart, updateCart] = useCartContext()


  return (
    <main data-checkout>
        <section className='items'>
            {
                cart.length == 0 ? <div className='empty'>Such an empty void. Please add products to make this  page meaningful.</div> :
                cart.map(item => (<Item data={item}/>))
            }
        </section>
        <section className='shipping'>
            { cart.length > 0 && <Shipping /> }
        </section>
        <section className='card_details'>
            { cart.length > 0 && <CardDetails /> }
        </section>
        <section className='checkout'>
            <div className='total_label'>
                <h2 className='label'>Total:</h2>
                <p className='total'>
                    ${
                        cart.reduce((accumulator, currentValue) => {
                            return (currentValue.price * currentValue.quantity) + accumulator
                        }, 0).toFixed(2)
                    }
                </p>
            </div>
            <button disabled={cart.length == 0}>Checkout</button>
        </section>
    </main>
  )
}

export default Checkout