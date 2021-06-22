import { useState, useEffect } from 'react'

import Register from '../../../../helpers/register.json'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';

/* ======= KORT IMPORT ====== */
import Kort from "../../../../components/Kort"
import { getAllWinerysByZip } from '../../../../helpers/apikaldleaflet'
/* ======= KORT IMPORT SLUT ====== */


const Le_Marognole = (props) => {

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

            <img src={Register.winery[3].image} className="topimg" alt="" />

            <div className="firstSection">
                <h1>Le Marognole</h1>
                <img src={Register.winery[3].stars} className="starimg" alt="" />
                <p>For only 15 euros per person you will get an amazing wine tasting in the heart of Valpolicella, which includes Le Marognoles amazing Amarone wine. If you buy as a couple for more than 150 Euro wine with home (and beware, because it’s hard to stop when you’ve first tasted the wine), you’ll get a 50 discount on the wine tasting</p>
                <h3>Price 15€</h3>
                <button>BOOK NOW</button>
            </div>
            <div className="sectionTwo">
                <h2>About Le Marognole</h2>
                <p>At this idyllic family-owned place, you instantly sense enthusiasm from the wine farmer, which gives you great quality for your money. Absolutely top notch with wine that is to pay off and that will impress at any dinner party. Of all the places we’ve visited in Valpolicella, this is where you get the best value for money. Even local wine growers recommend this place, which has helped us to find it – look forward to this experience.</p>
            </div>
            <div className="sectionTree">
                <h2>Contact information</h2>
                <p><FaMapMarkerAlt />&nbsp; Via Marognole, 7, 37020 Marano di Valpolicella VR, Italy.</p><br></br>
                <p><FaMobileAlt />&nbsp; +39 3358140026 / +39 45 7701237</p><br></br>
                <p><FaRegEnvelope />&nbsp; info@cortearchi.it / info@cortearchi.it</p><br></br>
                <p><FaGlobe />&nbsp; http://www.cortearchi.it</p><br></br>
                <p><BsClock />&nbsp; Monday to Saturday  10 am - 6pm</p>
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


        </div >

    )
}

export default Le_Marognole
