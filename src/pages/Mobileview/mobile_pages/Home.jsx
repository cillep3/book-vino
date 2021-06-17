import React from 'react'
import {Link} from 'react-router-dom'
import '../../Mobileview/Mobile.scss'

// import of components
import Liste from '../../../components/Listelement'
import Register from '../../../helpers/register.json'

const Home = () => {
    return (
        <div id="home">
            <img src={Register.images[4].src} />
            <h1>Our Wineries</h1>
            <Liste />
            <Link to="/allwinerys"><button id="homeButton">Load more</button></Link>
        </div>
    )
}

export default Home
