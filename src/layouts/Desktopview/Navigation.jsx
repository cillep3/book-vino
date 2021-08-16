import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../Desktopview/Navigation.scss'
import logo from '../../assets/logo-mork.png'
import { IoPersonCircleSharp } from 'react-icons/io5';




const Navigation = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-top">

                    <div className="logo">
                        <img src={logo}></img>
                    </div>

                </div>

                <ul>

                    <li className="nav-item-home">
                        <Link to='/' style={{ textDecoration: "none" }} className="nav-links">
                            HOME
                        </Link>
                    </li>

                    <li className="nav-item-winery">
                        <Link to='/allWinerys' style={{ textDecoration: "none" }} className="nav-links">
                            WINERIES
                        </Link>
                    </li>

                    <li className="nav-item-about">
                        <Link to='/about' style={{ textDecoration: "none" }} className="nav-links">
                            ABOUT
                        </Link>
                    </li>

                </ul>

                <div className="icon">
                    <Link to="/login">
                        <IoPersonCircleSharp color='#ffffff' fontSize='50px' />
                    </Link >
                </div>

            </div>
        </>
    )
}

export default Navigation
