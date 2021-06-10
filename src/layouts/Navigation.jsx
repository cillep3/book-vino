import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <Navlink to="/adminWinery">Admin</Navlink>
        </nav >
    )
}

export default Navigation
