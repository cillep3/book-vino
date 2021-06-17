import React from 'react'
import './Listelement.scss'
import { Link } from 'react-router-dom'

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
                                <img id="icon_image" src={Register.winery[0].icons[0].vector} alt="Food"/>
                                <p id="icon_text">{Register.winery[0].icons[0].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[0].icons[1].vector} alt="Tasting"/>
                                <p id="icon_text">{Register.winery[0].icons[1].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[0].icons[2].vector} alt="Tour"/>
                                <p id="icon_text">{Register.winery[0].icons[2].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[0].icons[3].vector} alt="Country"/>
                                <p id="icon_text">{Register.winery[0].icons[3].text}</p>
                            </div>
                        </div>
                    </div>
                }
                <Link to={"/marchesini-marcello"}><button>Get more information</button></Link>
            </figure>
            <figure>
                {
                    <div id="listElement">
                        <img id="hero" src={Register.winery[1].image} alt="Marco Reggio" />
                        <div id="borderBox">
                            <h1>{Register.winery[1].title}</h1>
                            <img id="stars" src={Register.winery[1].stars} alt="Marco Reggio" />
                        </div>
                        <div id="icons">
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[1].icons[0].vector} alt="Food"/>
                                <p id="icon_text">{Register.winery[1].icons[0].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[1].icons[1].vector} alt="Tasting"/>
                                <p id="icon_text">{Register.winery[1].icons[1].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[1].icons[2].vector} alt="Tour"/>
                                <p id="icon_text">{Register.winery[1].icons[2].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[1].icons[3].vector} alt="Country"/>
                                <p id="icon_text">{Register.winery[1].icons[3].text}</p>
                            </div>
                        </div>
                    </div>
                }
                <Link to={"/marco-reggio"}><button>Get more information</button></Link>
            </figure>
            <figure>
                {
                    <div id="listElement">
                        <img id="hero" src={Register.winery[2].image} alt="Sol de Montalto" />
                        <div id="borderBox">
                            <h1>{Register.winery[2].title}</h1>
                            <img id="stars" src={Register.winery[2].stars} alt="Sol de Montalto" />
                        </div>
                        <div id="icons">
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[2].icons[0].vector} alt="Food"/>
                                <p id="icon_text">{Register.winery[2].icons[0].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[2].icons[1].vector} alt="Tasting"/>
                                <p id="icon_text">{Register.winery[2].icons[1].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[2].icons[2].vector} alt="Tour"/>
                                <p id="icon_text">{Register.winery[2].icons[2].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[2].icons[3].vector} alt="Country"/>
                                <p id="icon_text">{Register.winery[2].icons[3].text}</p>
                            </div>
                        </div>
                    </div>
                }
                <Link to={"/sol-de-montalto"}><button>Get more information</button></Link>
            </figure>
            <figure>
                {
                    <div id="listElement">
                        <img id="hero" src={Register.winery[3].image} alt="Le Marognole" />
                        <div id="borderBox">
                            <h1>{Register.winery[3].title}</h1>
                            <img id="stars" src={Register.winery[3].stars} alt="Le Marognole" />
                        </div>
                        <div id="icons">
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[3].icons[0].vector} alt="Food"/>
                                <p id="icon_text">{Register.winery[3].icons[0].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[3].icons[1].vector} alt="Tasting"/>
                                <p id="icon_text">{Register.winery[3].icons[1].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[3].icons[2].vector} alt="Tour"/>
                                <p id="icon_text">{Register.winery[3].icons[2].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[3].icons[3].vector} alt="Country"/>
                                <p id="icon_text">{Register.winery[3].icons[3].text}</p>
                            </div>
                        </div>
                    </div>
                }
                <Link to={"/le-marognole"}><button>Get more information</button></Link>
            </figure>
            <figure>
                {
                    <div id="listElement">
                        <img id="hero" src={Register.winery[4].image} alt="Corte Archi" />
                        <div id="borderBox">
                            <h1>{Register.winery[4].title}</h1>
                            <img id="stars" src={Register.winery[4].stars} alt="Corte Archi" />
                        </div>
                        <div id="icons">
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[4].icons[0].vector} alt="Food"/>
                                <p id="icon_text">{Register.winery[4].icons[0].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[4].icons[1].vector} alt="Tasting"/>
                                <p id="icon_text">{Register.winery[4].icons[1].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[4].icons[2].vector} alt="Tour"/>
                                <p id="icon_text">{Register.winery[4].icons[2].text}</p>
                            </div>
                            <div id="icons_border">
                                <img id="icon_image" src={Register.winery[4].icons[3].vector} alt="Country"/>
                                <p id="icon_text">{Register.winery[4].icons[3].text}</p>
                            </div>
                        </div>
                    </div>
                }
                <Link to={"/corte-archi"}><button>Get more information</button></Link>
            </figure>
        </div>
    )
}

export default Listelement
