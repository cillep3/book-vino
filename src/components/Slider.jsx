import { useState, useEffect } from 'react'
// import Register from '../helpers/register.json'
import { slideShowStart, plusSlides, currentSlide, stopTimer } from '../helpers/slider'
import './Slider.scss';

const Slider = (props) => {

    // States til at rumme data
    const [slider, setSlider] = useState(props.sliderdata);
    const [fejl, setFejl] = useState();


    useEffect(() => {
        if (slider) {
            slideShowStart()
        }
        
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

            {/* Der er opstået en fejl - giv besked til brugeren */}
            {
                fejl &&
                <h3>{fejl}</h3>
            }
        </>
    )
}

export default Slider
