import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const user = localStorage.getItem('token')

    const logout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return (
        <div style={{ display: 'flex' }}>
            <ul style={{ display: "flex", listStyle: "none", gap: 10, fontSize: 22 }}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/movie">Movies</Link></li>
                {user ? <li onClick={logout}>Logout</li> : <li><Link to="/login">Login</Link></li>}

            </ul>

        </div>
    )
}

export default Navbar