import React from 'react'
import {Link} from 'react-router-dom'
import '../../Mobileview/Mobile.scss'

// import of components
import Liste from '../../../components/Listelement'
import Register from '../../../helpers/register.json'

const Home = () => {
    return (
        <div id="home">
            <div id="hero_box">
                <img id="home_hero" src={Register.images[4].src} />
                <h1>Wine tasting around the world</h1>
            </div>
            <h1>Our Wineries</h1>
            <Liste />
            <Link to="/allwinerys"><button id="homeButton">Load more</button></Link>
        </div>
    )
}

export default Home
