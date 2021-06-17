import React from 'react'
import Register from '../../../../helpers/register.json'
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FaMobileAlt} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';
import {FaGlobe} from 'react-icons/fa';
import {BsClock} from 'react-icons/bs';

const Sol_de_Montalto = () => {
    return (
        <div className="singlewine">
            <img src={Register.winery[2].image} className="topimg"/>
            <h1>Sol de Montalto</h1>
            <img src={Register.winery[2].stars} className="starimg"/>
            <h4>Imagine sitting in a quiet and enchanting place, surrounded by vineyards, with a glass of wine in your hands and some cold cuts and cheeses to pair. It’s not a dream and it’s just few kilometres from Lake Garda.</h4>
            <h3>Price 195$</h3>
            <button>BOOK NOW</button>
            <h2>About Sol de Montalto</h2>
            <p>The company produces a limited amount of bottles (around 15,000 per year) divided in 9 different wines. They produce extra virgin olive oil, honey, marmelades and cold cuts as well. The vineyards are processed without the use of pesticides, herbicides and chemical fertilizers in total respect of biodiversity. To ensure their health, the vineyards are sown in autumn with 12 types of herbs and plants with the aim of preserve the fauna and the proliferation of useful insects.</p>
            <h2>Contact information</h2>
            <p><FaMapMarkerAlt/>Sol de Montalto, Loc. Montalto di Gaium, 88, 37010, Rivoli Veronese</p><br></br>
            <p><FaMobileAlt/>+390456261292 / +393201133324</p><br></br>
            <p><FaRegEnvelope/>info@soldemontalto.it</p><br></br>
            <p><FaGlobe/>http://www.soldemontalto.it</p><br></br>
            <p><BsClock/>Monday to Saturday  9am - 9pm</p>
            <h2>Near By</h2>
            <p>Wine is often served with dinner.</p><br></br>
            <p>How do you hold a wine glass?</p><br></br>
            <p>Be not offended when your ex drinks wine.</p><br></br>
            <p>Burgundy is the definition of a strong red.</p><br></br>
        </div>
        
    )
}

export default Sol_de_Montalto
