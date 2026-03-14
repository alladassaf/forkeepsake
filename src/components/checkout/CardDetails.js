import React from 'react'

function CardDetails() {
  return (
    <>
        <div className='input_field full_name'>
            <label htmlFor='name'>Full Name on Card</label>
            <input type='text' id='name' />            
        </div>
        <div className='input_field num'>
            <label htmlFor='num'>Card Number</label>
            <input type='text' id='num' />
        </div>
        <div className='input_field cvv'>
            <label htmlFor='cvv'>CVV</label>
            <input type='text' id='cvv' />
        </div>
        <div className='input_field exp'>
            <label htmlFor='exp'>Exp Date</label>
            <input type='date' id='exp' />
        </div>
    </>
  )
}

export default CardDetails