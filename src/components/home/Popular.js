import React, { useEffect, useState } from 'react'

function Popular({ getData }) {

    const [popularItems, setPopularItems] = useState([])

    async function popularCategories(cat) {
        const res = await cat
        
        const arr = ['furniture', 'groceries', 'laptops', 'mobile-accessories', 'smartphones']

        const popsItems = res.filter(prod => arr.includes(prod))

        setPopularItems(popsItems)
    }

    useEffect(() => {
        const categories = getData('/category-list')

        popularCategories(categories)
        
    }, [])
    
  return (
    <section className='popular_items'>
        <div className='intro'>
            <p>See Whats Poppin, Customer FAVS</p>
        </div>
        <div className='grid_layout'>
            {
                popularItems.map((item, i) => {

                    const updatedItem = item.indexOf('-') != -1 ? item.replace('-', ' ') : item

                    return <div className='item' key={i}>{updatedItem.toUpperCase()}</div>
                })
            }
        </div>
    </section>
  )
}

export default Popular