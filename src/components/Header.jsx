import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <Link to="/" className='site-logo'>#VANLIFE</Link>
            <nav className='navbar'>
                <NavLink to="/host" className='host' style={({isActive}) => isActive ? activeStyle : null }>Host</NavLink>
                <NavLink to="/about" className='about' style={({isActive}) => isActive ? activeStyle : null }>About</NavLink>
                <NavLink to="/vans" className='vans' style={({isActive}) => isActive ? activeStyle : null }>Vans</NavLink>
            </nav>
        </header>
    )
}

export default Header