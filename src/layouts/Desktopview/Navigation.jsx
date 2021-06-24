import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/adminWinery">Admin</NavLink>
            <NavLink to="/editWineries">Edit</NavLink>
            <NavLink to="/listelement">Listelement</NavLink>
            <NavLink to="/winery">Winery</NavLink>
            <NavLink to="/about">About</NavLink>

        </nav >
    )
}

export default Navigation
