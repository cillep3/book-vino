import React from 'react'
import '../App.scss'

// import of components
import Register from '../helpers/register.json'

const Login = () => {
    return (
        <div id="loginContainer">
            <h1>login</h1>
            <img src={Register.images[7].src} />
        </div>
    )
}

export default Login
