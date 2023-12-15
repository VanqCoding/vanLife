import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link to="/" className='site-logo'>#VANLIFE</Link>
            <nav className='navbar'>
                <Link to="/host" className='host'>Host</Link>
                <Link to="/about" className='about'>About</Link>
                <Link to="/vans" className='vans'>Vans</Link>
            </nav>
        </header>
    )
}

export default Header