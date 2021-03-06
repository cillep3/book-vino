import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
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


const Corte_Archi = (props) => {


    const [byNavne, setbyNavne] = useState("Lazise") // Her er zipcode skiftet ud med "bynavn"
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

            {/* Vi kalder på slideren og overfører den respektive sides data til props. I dette tilfælde har vi kaldt data = sliderdata, som rummer 'corte_archi'-data fra vores register.json. Sliderdata bliver kaldt på i slideren */}
            <Slider sliderdata={Register.corte_archi} className="topimg" />  

            <div className="firstSection">
                <h1>Corte Archi</h1>
                <img src={Register.winery[4].stars} className="starimg" alt="" />
                <h2>Our Wine Tasting</h2>
                <p>Our cellar has been producing wine since 1800, we are in Castelnuovo Calcea, a small village in the heart of Monferrato. Now in its fifth generation, it is led by Marco Reggio who, with the precious collaboration of his father Romaldo and his four children, leads and follows every step from the vineyard to the bottle. The hills made up of clay, sandstone and limestone sediments represent the ideal situation for quality viticulture, in particular for the production of Barbera, the flagship product of our company. The warm and breezy climate, especially in the summer season, allows optimal ripening, laying the foundations for the production of high quality wines.</p>
                <h3>Price 125€</h3>
                <Link to="/booking"><button>BOOK NOW</button></Link>
            </div>

            <div className="sectionTwo">
                <h2>About Corte Archi</h2>
                <p>Fernando and Silvia will welcome you cordially to show the cellar and, in the tasting room or on the portico surrounded by the Arches, they will accompany you through the tasting journey in the wonderful world of their wines.</p>
            </div>

            <div className="sectionTree">
                <h2>Contact information</h2>
                <p><FaMapMarkerAlt />Corte Archi, Via Paverno 21, 37020, Valgatara - Marano di Valpolicella, Italy, Via Paverno 21</p><br></br>
                <p><FaMobileAlt /> +39 3358140026 / +39 45 7701237</p><br></br>
                <p><FaRegEnvelope /> info@cortearchi.it / info@cortearchi.it</p><br></br>
                <p><FaGlobe /> http://www.cortearchi.it</p><br></br>
                <p><BsClock /> Monday to Saturday  10 am - 6pm</p>
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

export default Corte_Archi
