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


const Bel_Amino = (props) => {

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

            <img src={Register.winery[5].image} className="topimg" alt="" />

            <div className="firstSection">
                <h1>Bel Amino</h1>
                <img src={Register.winery[5].stars} className="starimg" alt="" />
                <h2>Our Wine Tasting</h2>
                <p>Our cellar has been producing wine since 1800, we are in Castelnuovo Calcea, a small village in the heart of Monferrato. Now in its fifth generation, it is led by Marco Reggio who, with the precious collaboration of his father Romaldo and his four children, leads and follows every step from the vineyard to the bottle. The hills made up of clay, sandstone and limestone sediments represent the ideal situation for quality viticulture, in particular for the production of Barbera, the flagship product of our company. The warm and breezy climate, especially in the summer season, allows optimal ripening, laying the foundations for the production of high quality wines.</p>
                <h3>Price 215€</h3>
                <button>BOOK NOW</button>
            </div>

            <div className="sectionTwo">
                <h2>About Marchesini Marcello</h2>
                <p>Wine is often served with dinner. It may be the oldest known type of wine, as it is the most straightforward to make with the skin contact method. In the unreliable summers of northern France, the acidity of under ripened grapes was often masked with chaptalization with unsatisfactory results, whereas now the less ripe grapes are made into popular sparkling wines.</p>
            </div>

            <div className="sectionTree">
                <h2>Contact information</h2>
                <p><FaMapMarkerAlt />Via Valesana 35, 37017, Lazise, Italy</p><br></br>
                <p><FaMobileAlt /> +39 045 7580731 / +39 340 9067014</p><br></br>
                <p><FaRegEnvelope /> info@marcellomarchesini.it</p><br></br>
                <p><FaGlobe /> info@marcellomarchesini.it</p><br></br>
                <p><BsClock /> Monday to Saturday  9 am - 22 am</p>
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

export default Bel_Amino
