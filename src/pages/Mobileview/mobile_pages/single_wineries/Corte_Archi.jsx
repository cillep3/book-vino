import React from 'react'
import Register from '../../../../helpers/register.json'
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FaMobileAlt} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';
import {FaGlobe} from 'react-icons/fa';
import {BsClock} from 'react-icons/bs';

const Corte_Archi = () => {
    return (
        <div className="singlewine">
            <img src={Register.winery[4].image} className="topimg"/>
            <h1>Corte Archi</h1>
            <img src={Register.winery[4].stars} className="starimg"/>
            <h4>Our cellar follow Valpolicella RRR protocol. What is it?  It means “Reduce, Retrench,Respect” and  is a Sustainable Production Protocol based on Sustainable Practices. The protocol provides for a certification for both wines and grapes produced by following its guidelines. The wineries that follow these procedures aim to have a low environmental impact production .</h4>
            <h3>Price 125$</h3>
            <button>BOOK NOW</button>
            <h2>About Corte Archi</h2>
            <p>Fernando and Silvia will welcome you cordially to show the cellar and, in the tasting room or on the portico surrounded by the Arches, they will accompany you through the tasting journey in the wonderful world of their wines.</p>
            <h2>Contact information</h2>
            <p><FaMapMarkerAlt/>Corte Archi, Via Paverno 21, 37020, Valgatara - Marano di Valpolicella, Italy, Via Paverno 21</p><br></br>
            <p><FaMobileAlt/>+39 3358140026 / +39 45 7701237</p><br></br>
            <p><FaRegEnvelope/>info@cortearchi.it / info@cortearchi.it</p><br></br>
            <p><FaGlobe/>http://www.cortearchi.it</p><br></br>
            <p><BsClock/>Monday to Saturday  10 am - 6pm</p>
            <h2>Near By</h2>
            <p>Wine is often served with dinner.</p><br></br>
            <p>How do you hold a wine glass?</p><br></br>
            <p>Be not offended when your ex drinks wine.</p><br></br>
            <p>Burgundy is the definition of a strong red.</p><br></br>
        </div>
        
    )
}

export default Corte_Archi
