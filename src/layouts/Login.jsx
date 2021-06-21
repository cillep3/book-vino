import {useState} from 'react'
import '../App.scss'
import Button from '@material-ui/core/Button'
import Form from '@material-ui/core/TextField'
import grey from '@material-ui/core/colors/grey'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// import of components
import Register from '../helpers/register.json'

// Defining new color theme for material ui
const theme = createMuiTheme({
    palette:{
        primary:{
            main:grey[50]
        }
    }
})


const Login = () => {
    
    let message = []
    let checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let email = document.getElementById('email')
    
    const handleSubmit = (e) => {
        e.preventDefault()

        {
           if(!email.value.match(checkEmail)){
            message.push('Din email er ikke gyldig')
        } 
        }
        
    }
    
    return (
        <ThemeProvider theme={theme}>
            <div id="loginContainer">
                <img id="loginLogo" src={Register.images[8].src} />
                <div id="loginInputs">
                    <div id="email"><Form label="Username" variant="outlined" color="primary" display="block" /></div>
                    <Form label="Password" variant="outlined" color="primary" display="block"/>
                </div>
                <Button href="/create" id="loginButton" onSubmit={handleSubmit}>Login</Button>
            </div>
        </ThemeProvider>
    )
}

export default Login
