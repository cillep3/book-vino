import React from 'react'
import '../pages/Mobileview/Mobile.scss'
import Register from '../helpers/register.json'
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footlogo"><img src={Register.images[8].src}/></div>
            <div id="contact">
                <img src={Register.images[6].src}/>
                <p>ck@bookvino.com</p>
            </div>
            <div id="contact">
                <img src={Register.images[5].src}/>
                <p>Engdalen 28, 8500 Grenaa</p>
            </div>
            <div id="contact">
                <img src={Register.images[7].src}/>
                <p>+45 29875722</p>
            </div>
            <button>BOOK NOW</button>
            <h5>FAQ</h5>
            <Link to="/aboutus"><h5>About BookVino</h5></Link>
            <Link to="/allwinerys"><h5>Wineries</h5></Link>
            <img alt=""/><img alt=""/><img alt=""/>
            <h6>Copyright © bookvino.com 2020 All Rights Reserved<br></br>CVR: 37992240</h6>
            
        </div>
    )
}

export default Footer
