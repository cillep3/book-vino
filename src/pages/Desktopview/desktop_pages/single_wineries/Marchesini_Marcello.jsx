import { useState, useEffect } from 'react'

import Register from '../../../../helpers/register.json'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';
import {Link} from 'react-router-dom'
import Slider from '../../../../components/Slider';
import Booking from '../../../../layouts/SinglewineryBooking';

/* ======= KORT IMPORT ====== */
import Kort from "../../../../components/Kort"
import { getAllWinerysByZip } from '../../../../helpers/apikaldleaflet'
/* ======= KORT IMPORT SLUT ====== */

const Marchesini_Marcello = (props) => {


    const [byNavne, setbyNavne] = useState("Marano di Valpolicella") // Her er zipcode skiftet ud med "bynavn"
    const [AllWinerys, setAllWinerys] = useState() // Vindata
    const [error, setError] = useState() // FEJLBESKEDER

    // alt det der skal ske, skrives i [] (når denne er loadet hentes vindata)
    useEffect(() => {

        if (byNavne.length != null) {

            getAllWinerysByZip(byNavne).then(winerydata => {

                console.log(winerydata)
                setAllWinerys(winerydata); // put vindata i vindata-state
                setError();          // Tøm fejlbesked

                props.koord([winerydata.coord.lat, winerydata.coord.lon])

                // for at gribe fejlene som kommer tilbage - gemmes i error.
            }).catch(err => {

                console.log(err)
                setError(err) // Put fejlbesked i errorstate / ER SERVICE NEDE ELLER HAR DU INDTASTET FORKERT POSTNUMMER
            })
        }

    }, [byNavne])

    return (
        <div className="singlewineDesk">

            {/* Vi kalder på slideren og overfører den respektive sides data til props. I dette tilfælde har vi kaldt data = sliderdata, som rummer 'marchesini_marcello'-data fra vores register.json. Sliderdata bliver kaldt på i slideren */}
            <Slider sliderdata={Register.marchesini_marcello} className="topimg" /> 

            <div className="singlewineHeadlineDesk">
                <h1>Marchesini Marcello</h1>
                <img src={Register.winery[0].stars} className="starimg" alt="" />
            </div> 

            <div className="firstSectionDesk">
                <h2>Our Wine Tasting</h2>
                <p>Our cellar has been producing wine since 1800, we are in Castelnuovo Calcea, a small village in the heart of Monferrato. Now in its fifth generation, it is led by Marco Reggio who, with the precious collaboration of his father Romaldo and his four children, leads and follows every step from the vineyard to the bottle. The hills made up of clay, sandstone and limestone sediments represent the ideal situation for quality viticulture, in particular for the production of Barbera, the flagship product of our company. The warm and breezy climate, especially in the summer season, allows optimal ripening, laying the foundations for the production of high quality wines.</p>
                <h3>Price 215€</h3>
            </div>

            <div id="singlewineryContactForm">
                <Booking id="bookingFormDesk"/>
            </div>
            <Link to="/booking" ><button id="bookButtonDesk">BOOK NOW</button></Link>

            <div className="sectionTwoDesk">
                <h2>About Marchesini Marcello</h2>
                <p>Wine is often served with dinner. It may be the oldest known type of wine, as it is the most straightforward to make with the skin contact method. In the unreliable summers of northern France, the acidity of under ripened grapes was often masked with chaptalization with unsatisfactory results, whereas now the less ripe grapes are made into popular sparkling wines.</p>
            </div>
            <div className="sectionTreeDesk">
                <h2>Contact information</h2>
                <p><FaMapMarkerAlt />Via Valesana 35, 37017, Lazise, Italy</p><br></br>
                <p><FaMobileAlt /> +39 045 7580731 / +39 340 9067014</p><br></br>
                <p><FaRegEnvelope />info@marcellomarchesini.it</p><br></br>
                <p><FaGlobe />info@marcellomarchesini.it</p><br></br>
                <p><BsClock /> Monday to Saturday  9 am - 22 am</p>
            </div>
            <div className="sectionFourDesk">
                <h2>Near By</h2>
                <p>Wine is often served with dinner.</p><br></br>
                <p>How do you hold a wine glass?</p><br></br>
                <p>Be not offended when your ex drinks wine.</p><br></br>
                <p>Burgundy is the definition of a strong red.</p><br></br>
            </div>

            <div id="kortPages">

                {
                    AllWinerys &&
                    <div id="kort">
                        <Kort koordinater={[AllWinerys.coord.lat, AllWinerys.coord.lon]} />
                    </div>
                }
            </div>

        </div>

    )
}

export default Marchesini_Marcello
