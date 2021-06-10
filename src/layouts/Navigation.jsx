import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/createWinery">Create Winery</NavLink>
            <NavLink to="/adminWinery">Admin</NavLink>
        </nav >
    )
}

export default Navigation
