import React from 'react'
import Register from '../../../../helpers/register.json'

const Marchesini_Marcello = () => {
    return (
        <div className="singlewine">
            <img src={Register.winery[0].image} className="topimg"/>
            <h1>Marchesini Marcello</h1>
            <img src={Register.images[9].src} className="starimg"/>
            <h4>Wine is often served with dinner. It may be the oldest known type of wine, as it is the most straightforward to make with the skin contact method. In the unreliable summers of northern France, the acidity of under ripened grapes was often masked with chaptalization with unsatisfactory results, whereas now the less ripe grapes are made into popular sparkling wines.</h4>
            <h3>Price 215$</h3>
            <button>BOOK NOW</button>
            <h2>About Marchesini Marcello</h2>
            <p>Wine is often served with dinner. It may be the oldest known type of wine, as it is the most straightforward to make with the skin contact method. In the unreliable summers of northern France, the acidity of under ripened grapes was often masked with chaptalization with unsatisfactory results, whereas now the less ripe grapes are made into popular sparkling wines.</p>
            <h2>Contact information</h2>
            <p>Via Valesana 35, 37017, Lazise, Italy</p><br></br>
            <p>+39 045 7580731 / +39 340 9067014</p><br></br>
            <p>info@marcellomarchesini.it</p><br></br>
            <p>info@marcellomarchesini.it</p><br></br>
            <p>Monday to Saturday  9 am - 22 am</p>
            <h2>Near By</h2>
            <p>Wine is often served with dinner.</p><br></br>
            <p>How do you hold a wine glass?</p><br></br>
            <p>Be not offended when your ex drinks wine.</p><br></br>
            <p>Burgundy is the definition of a strong red.</p><br></br>
        </div>
    )
}

export default Marchesini_Marcello
