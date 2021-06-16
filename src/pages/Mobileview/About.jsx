import Register from '../../helpers/register.json'
import React from 'react'



const About = () => {
    return (
        <div>
            <img src={Register.images[0].src}/>
            <h1>About BookVino</h1>
        </div>
    )
}

export default About