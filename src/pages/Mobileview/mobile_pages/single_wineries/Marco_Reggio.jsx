import { useState, useEffect } from 'react'
import Register from '../../../../helpers/register.json'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';
import Slider from '../../../../components/Slider'

/* ======= KORT IMPORT ====== */
import Kort from "../../../../components/Kort"
import { getAllWinerysByZip } from '../../../../helpers/apikaldleaflet'
/* ======= KORT IMPORT SLUT ====== */

const Marco_Reggio = (props) => {

    <Slider sliderdata={Register.reggio} />

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
        <div className="singlewine">

            <img src={Register.winery[1].image} className="topimg" alt="" />

            <div className="firstSection">
                <h1>Marco Reggio</h1>
                <img src={Register.winery[1].stars} className="starimg" alt="" />
                <h2>Our Wine Tasting</h2>
                <p>Our cellar has been producing wine since 1800, we are in Castelnuovo Calcea, a small village in the heart of Monferrato. Now in its fifth generation, it is led by Marco Reggio who, with the precious collaboration of his father Romaldo and his four children, leads and follows every step from the vineyard to the bottle. The hills made up of clay, sandstone and limestone sediments represent the ideal situation for quality viticulture, in particular for the production of Barbera, the flagship product of our company. The warm and breezy climate, especially in the summer season, allows optimal ripening, laying the foundations for the production of high quality wines.</p>
                <h3>Price 115€</h3>
                <button>BOOK NOW</button>
            </div>

            <div className="sectionTwo">
                <h2>About Marco Reggio</h2>
                <p>At this idyllic family-owned place, you instantly sense enthusiasm from the wine farmer, which gives you great quality for your money. Absolutely top notch with wine that is to pay off and that will impress at any dinner party. Of all the places we’ve visited in Valpolicella, this is where you get the best value for money. Even local wine growers recommend this place, which has helped us to find it – look forward to this experience.</p>
            </div>

            <div className="sectionTree">
                <h2>Contact information</h2>
                <p><FaMapMarkerAlt />Via Marognole, 7, 37020 Marano di Valpolicella VR, Italy.</p><br></br>
                <p><FaMobileAlt /> +39 3479698516</p><br></br>
                <p><FaRegEnvelope /> marcoreg@libero.it</p><br></br>
                <p><FaGlobe /> http://www.marcoreg.libero.it</p><br></br>
                <p><BsClock /> Monday to Saturday  8.30 am - 7pm</p>
            </div>

            <div className="sectionFour">
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

export default Marco_Reggio
