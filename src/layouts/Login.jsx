import React from 'react'
import '../App.scss'

// import of components
import Register from '../helpers/register.json'

const Login = () => {
    return (
        <div id="loginContainer">
            <img id="loginLogo" src={Register.images[8].src} />
            <div id="loginInputs">
                <input type="text"/>
                <input type="text"/>
            </div>
            <button id="loginButton">Test</button>
        </div>
    )
}

export default Login
