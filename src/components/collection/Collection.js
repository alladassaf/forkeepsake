import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import './collection.css'
import Option from './Option'
import Card from './Card'

function Collection() {

  const [cart, updateCart] = useCartContext()
  const [categories, setCatagories] = useState([])
  const [products, setProducts] = useState([])
  const [searchType, setSearchType] = useState('name')
  
  async function getData(ext = "") {
    const res = await fetch(`https://dummyjson.com/products${ext}`)
    const data = await res.json()
    
    console.log(data)

    return data
  }

  const results = async (ext) => {
    const res = await getData(ext)
    const data = res.products

    setProducts(data)
    console.log(data)
    console.log(ext)
  }


  function updateSearchType(event) {
    event.preventDefault()

    setSearchType(event.target.className)
  }

  function searchCat(event) {

    const keyWord = event.target.value.indexOf(" ") != -1 ? event.target.value.replace(" ", "-") : event.target.value

    results(`/category/${keyWord}?limit=10&skip=0`)


  }


  useEffect(() => {

    // const prod = getData()


    results(`?limit=10&skip=0`)
  }, [])
  
  
  
  useEffect(() => {
    const cats = getData('/category-list')
    
    const storeCat = async () => {
      const res = await cats
      
      setCatagories(res)
    }

    storeCat()
    getData('/categories')

  }, [])

  // getData()
  return (
    <main data-collection>
        <section className='collections_section'>
          <h2 className="collection_title">Collection</h2>
          <div className="toggle_inputs_label">
            <div className={ searchType == 'name' ? "toggle_inputs name" : "toggle_inputs category"}>
              <div className='search_input'>
                <label htmlFor='search'>Search</label>
                <input type='text' name='search' id='search' placeholder='Search...' onKeyDownCapture={(e) => {e.key == 'Enter' && e.target.value != "" && results(`/search?q=${e.target.value}&limit=10&skip=0`)}}/>
                <button className='search_btn' onClick={(e) => {results(`/search?q=${e.target.previousElementSibling.value}&limit=10&skip=0`)}}>Search</button>
              </div>
              <div className='select_input'>
                <select name='categories' onChange={(e) => {searchCat(e)}}>
                    { 
                      categories.map((cat, i) => {
                          return <Option key={i} cat={cat} />
                        })
                    }
                </select>
              </div>
            </div>
            <div className='input_label'>
              <h2>How do you want to search. Choose your liking.</h2>
              <div className='toggle'>
                <a href="#" className='name' onClick={(e) => {updateSearchType(e)}}>Name</a>
                <a href="#" className='category' onClick={(e) => {updateSearchType(e)}}>Categorie</a>
              </div>
            </div>
          </div>
          <div className='product_cards'>
              {
                products.map((prod, i) => (<Card key={i} data={prod} />))
              }
          </div>
        </section>
    </main>
  )
}

export default Collection