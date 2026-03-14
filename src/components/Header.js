import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Header() {

    const listStyles = {
        textDecoration: 'none',
        fontSize: '1.1rem',
        color: 'black'
    }
  return (
    <header>
        <div className='logo'><span className='lower'>for</span>&nbsp;<span className='upper'>KeepSake</span></div>
        <nav>
            <Link to="/" style={listStyles}>Home</Link>
            <Link to="/collection" style={listStyles}>Collection</Link>
            <Link to="/repair" style={listStyles}>Repair</Link>
        </nav>
        <Link to='/cart' style={{position: "absolute", top: 15, right: 22, textDecoration: 'none', color: 'hsl(203, 81%, 22%)', fontSize: '1.15rem'}}>
            <FontAwesomeIcon icon={faCartShopping} />
        </Link>
    </header>
  )
}

export default Header