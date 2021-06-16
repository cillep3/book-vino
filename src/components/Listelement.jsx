import React from 'react'
import './Listelement.scss'

// Import of components
import Register from '../helpers/register.json'

const Listelement = () => {
    return (
        <div id="listContainer">
            <figure>
                {
                    <div id="listElement">
                        <img id="hero" src={Register.winery[0].image} alt="Marchesini Marcello" />
                        <div id="borderBox">
                            <h1>{Register.winery[0].title}</h1>
                            <img id="stars" src={Register.winery[0].stars} alt="Marchesini Marcello" />
                        </div>
                        <div id="icons">
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[0].icons[0].vector}/>
                                <p id="icon_text">{Register.winery[0].icons[0].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[0].icons[1].vector}/>
                                <p id="icon_text">{Register.winery[0].icons[1].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[0].icons[2].vector}/>
                                <p id="icon_text">{Register.winery[0].icons[2].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[0].icons[3].vector}/>
                                <p id="icon_text">{Register.winery[0].icons[3].text}</p>
                            </div>
                        </div>
                    </div>
                }
                <button>Get more information</button>
            </figure>
            <figure>
                {
                    <div id="listElement">
                        <img id="hero" src={Register.winery[1].image} alt="Marchesini Marcello" />
                        <div id="borderBox">
                            <h1>{Register.winery[1].title}</h1>
                            <img id="stars" src={Register.winery[1].stars} alt="Marchesini Marcello" />
                        </div>
                        <div id="icons">
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[1].icons[0].vector}/>
                                <p id="icon_text">{Register.winery[1].icons[0].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[1].icons[1].vector}/>
                                <p id="icon_text">{Register.winery[1].icons[1].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[0].icons[2].vector}/>
                                <p id="icon_text">{Register.winery[1].icons[2].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[0].icons[3].vector}/>
                                <p id="icon_text">{Register.winery[1].icons[3].text}</p>
                            </div>
                        </div>
                    </div>
                }
                <button>Get more information</button>
            </figure>
        </div>
    )
}

export default Listelement
