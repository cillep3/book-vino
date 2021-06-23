import { useState, useEffect } from 'react'
// import Register from '../helpers/register.json'
import { slideShowStart, plusSlides, currentSlide, stopTimer } from '../helpers/slider'
import './Slider.scss';

// Vi implementerer props, som rummer de data, vi skal bruge i slideren
const Slider = (props) => {

    // Vi kalder på vores props i const slider vha sliderdata, somv vi har navngivet i <Slider /> i de respektive komponenter, hvor vi skal bruge slideren. Vi kommer props i en useState, da vi vha useEffect måler på, om useState indeholder data
    const [slider, setSlider] = useState(props.sliderdata);
    const [fejl, setFejl] = useState();

    // Hvis slider indeholder data, skal slideShowStart() gå igang. Ellers skal den melde fejl
    useEffect(() => {
        if (slider) {
            slideShowStart()
        } else {
            setFejl("Der er sket en fejl")
        }
        
        // stopTimer() er nødvendig for, at vores side ikke crashe. Hvis den ikke var der, ville hele siden crashe, når brugeren klikker væk fra komponentet med slideren. Det skyldes, at slider-funktionen kører videre i baggrunden, og sker det at man klikker ind på en ny side, kan den ikke finde funktionen. stopTimer() gør, at slider-funktionen stopper, når brugeren klikker væk
        return () => {
            stopTimer() 
        }
    }, [])



    return (
        <>
            {/* Der er data klar */}
            {
                slider &&
                <>
                    <div className="slideshow-container">

                        {
                            slider.map((data, index) => (
                                <div className="slideshow_mySlides" key={index}>
                                    <img className="slideshow_image" src={data.src} />
                                </div>
                            ))
                        }
                        {/* Next and pre icons */}
                        <a className="slideshow_prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                        <a className="slideshow_next" onClick={() => plusSlides(1)}>&#10095;</a>
                    </div>

                    {/* Dots */}
                    <div style={{textAlign:"center"}}>
                        {
                            slider.map((data, index) => (
                                <span key={index} className="slideshow_dot" onClick={ () => currentSlide(index + 1)}></span>
                            ))
                        }
                    </div>
                </>
            }

            {/* Vi venter på data (endnu ingen data - og heller ingen fejl) */}
            {
                !slider && !fejl &&
                <h3>Loader ....</h3>
            }

            {/* Der er opstået en fejl - giv besked til brugeren */}
            {
                fejl &&
                <h3>{fejl}</h3>
            }
        </>
    )
}

export default Slider
