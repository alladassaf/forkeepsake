import React from 'react'

function Shipping() {
  return (
    <>
        <div className='input_field address'>
            <label htmlFor='address'>Address</label>
            <input type='text' id='address' />            
        </div>
        <div className='input_field city'>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' />
        </div>
        <div className='input_field state'>
            <label htmlFor='state'>State</label>
            <input type='text' id='state' />
        </div>
        <div className='input_field zip'>
            <label htmlFor='zip'>Zip Code</label>
            <input type='text' id='zip' />
        </div>
    </>
  )
}

export default Shipping