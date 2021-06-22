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


const Sol_de_Montalto = (props) => {

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

            <img src={Register.winery[2].image} className="topimg" alt="" />

            <div className="firstSection">
                <h1>Sol de Montalto</h1>
                <img src={Register.winery[2].stars} className="starimg" alt="" />
                <h2>Our Wine Tasting</h2>
                <p>Imagine sitting in a quiet and enchanting place, surrounded by vineyards, with a glass of wine in your hands and some cold cuts and cheeses to pair. It’s not a dream and it’s just few kilometres from Lake Garda.</p>
                <h3>Price 195€</h3>
                <button>BOOK NOW</button>
            </div>

            <div className="sectionTwo">
                <h2>About Sol de Montalto</h2>
                <p>The company produces a limited amount of bottles (around 15,000 per year) divided in 9 different wines. They produce extra virgin olive oil, honey, marmelades and cold cuts as well. The vineyards are processed without the use of pesticides, herbicides and chemical fertilizers in total respect of biodiversity. To ensure their health, the vineyards are sown in autumn with 12 types of herbs and plants with the aim of preserve the fauna and the proliferation of useful insects.</p>
            </div>

            <div className="sectionTree">
                <h2>Contact information</h2>
                <p><FaMapMarkerAlt /> Sol de Montalto, Loc. Montalto di Gaium, 88, 37010, Rivoli Veronese</p><br></br>
                <p><FaMobileAlt /> +390456261292 / +393201133324</p><br></br>
                <p><FaRegEnvelope /> info@soldemontalto.it</p><br></br>
                <p><FaGlobe /> http://www.soldemontalto.it</p><br></br>
                <p><BsClock /> Monday to Saturday  9am - 9pm</p>
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

export default Sol_de_Montalto
