import React, { useEffect, useState } from 'react'
import Option from '../collection/Option'
import './repair.css'

function Repair() {

  const [categories, setCatagories] = useState([])


    async function getData(ext = "") {
    const res = await fetch(`https://dummyjson.com/products${ext}`)
    const data = await res.json()
    
    console.log(data)

    return data
  }

  useEffect(() => {
    const cats = getData('/category-list')
    
    const storeCat = async () => {
      const res = await cats
      
      setCatagories(res)
    }

    storeCat()
    getData('/categories')

  }, [])

  return (
    <main data-repair>
        <h1 className='title'>Submit a Return</h1>
        <form className='return_form'>
            <div className='input_field span-3'>
              <label htmlFor='item'>Item</label>
              <select id='item'>
                  { 
                    categories.map((cat, i) => {
                        return <Option key={i} cat={cat} />
                      })
                  }
              </select>
            </div>
            <div className='input_field span-1'>
              <label htmlFor='qty'>Quantity</label>
              <input type='number' min='1' id='qty'/>
            </div>
            <div className='input_field span-3'>
              <label htmlFor='reason'>Reason</label>
              <select id='reason'>
                <option>Product arrived with wear and tear</option>
                <option>Lost in transit</option>
                <option>Stolen</option>
              </select>
            </div>
            <div className='input_field span-1'>
              <label htmlFor='carrier'>Carrier</label>
              <select id='carrier'>
                <option>USPS</option>
                <option>UPS</option>
                <option>FedEx</option>
              </select>
            </div>
            <div className='input_field'>
              <label htmlFor='comment'>Comments</label>
              <textarea id='comment'></textarea>
            </div>
            <button type='submit'>Submit Return</button>
        </form>
    </main>
  )
}

export default Repair