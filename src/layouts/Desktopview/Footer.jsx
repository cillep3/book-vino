import React from 'react'
import Register from '../../helpers/register.json'
import {Link} from 'react-router-dom'

import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';



const Footer = () => {
    return (
        <div className="deskfooter">
            <h5>FAQ</h5>
            <h5>About BookVino</h5>
            <h5>Wineries</h5>
            <div className="deskfootlogo"><Link to="/"><img src={Register.images[8].src} /></Link></div>
            <div className="desksocial"><FaFacebookSquare /><FaInstagramSquare /><FaYoutubeSquare /></div>
            <h6>Copyright © bookvino.com 2020 All Rights Reserved<br></br>CVR: 37992240</h6>
            <div id="deskcontact">
                <div className="iconfa"><FaEnvelope /></div>
                <p>ck@bookvino.com</p>
            </div>
            <div id="deskcontact">
                <div className="iconfa"><FaMapMarkerAlt /></div>
                <p>Engdalen 28, 8500 Grenaa</p>
            </div>
            <div id="deskcontact">
                <div className="iconfa"><FaMobileAlt /></div>

                <p>+45 29875722</p>
            </div>
        </div>
    )
}

export default Footer
