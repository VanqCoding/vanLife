import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import avatarIcon from '../assets/avatar-icon.png';

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return (
        <header>
            <Link to="/" className='site-logo'>#VANLIFE</Link>
            <nav className='navbar'>
                <NavLink to="/host" className='navbar-host' style={({ isActive }) => isActive ? activeStyle : null}>Host</NavLink>
                <NavLink to="/about" className='about' style={({ isActive }) => isActive ? activeStyle : null}>About</NavLink>
                <NavLink to="/vans" className='vans' style={({ isActive }) => isActive ? activeStyle : null}>Vans</NavLink>
                <Link to="login" className="login-link">
                    <img
                        src={avatarIcon}
                        className="login-icon"
                    />
                </Link>
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
    )
}

export default Header