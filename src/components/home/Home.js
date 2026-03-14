import { ReactComponent as SVGComponenet} from '../../Images/online_ad.svg'
import '../../css/home.css'
import Popular from './Popular'
import Contact from './Contact'
import React, {useEffect, useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Home() {

    
    const [featuredList, setFeaturedList] = useState([])
    const featuredListRef = useRef()
    
    
    
    async function filterFeatured(features) {
        const res = await features
        const allProducts =  res.products
        
        const filteredProducts = allProducts.filter(prod => prod.id == 1 | prod.id == 5 | prod.id == 8)
        
        
        setFeaturedList(filteredProducts)
        
    }
    
    async function getData(ext = "") {
        const res = await fetch(`https://dummyjson.com/products${ext}`)
        const data = await res.json()
                
        return data
    }
    
    
    useEffect(() => {
        const features = getData()
        
        filterFeatured(features)

    }, [])
    
  return (
    <main data-home>
        <div className='hero_img'>
            <SVGComponenet width='100%' height='100%' style={{marginLeft: 'auto', marginRight: 'auto'}} />
        </div>
        <section className='featured_section' ref={featuredListRef}>
            <div className='scroll_wheel'>
                {
                    featuredList.map((prod, i) => {
                        return (
                            <div className='card' key={i}>
                                <div className='top'>
                                    <div className='img'>
                                        <img src={prod.thumbnail} />
                                    </div>
                                </div>
                                <div className='bottom'>
                                    <h2 className='title'>{prod.title}</h2>
                                    <p className='price'>${prod.price}</p>
                                    <div className='desc'>
                                        <ul className='info'>
                                            <li>{prod.stock}</li>
                                            <li>{prod.sku}</li>
                                        </ul>
                                        <div className='review'>
                                            <FontAwesomeIcon icon={faStar} style={{fontSize: 12, color: '#5D8096'}} />
                                            <span>{prod.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        <article className='quote_section'>
            <p className='quote_text'>Finders Keepers as they say. Come down to <span>for Keepsakes</span> shop for anything from buety supplies to modern tech. We have it <strong>ALL</strong>.</p>
        </article>
        <Popular getData={getData}/>
        <Contact />
    </main>
  )
}

export default Home