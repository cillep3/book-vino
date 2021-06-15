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
                        <h1>{Register.winery[0].title}</h1>
                        <img id="stars" src={Register.winery[0].stars} alt="Marchesini Marcello" />
                        {/* <div>
                            {Register.winery[0].icons[0].vector}
                        </div> */}
                        <div id="icons">
                            {Register.winery[0].icons.map((data, index) =>
                                <img src={data.vector}/>
                            )}
                            {Register.winery[0].icons.map((data, index) =>
                                <p>{data.text}</p>
                            )}
                        </div>
                    </div>
                }
                <button>Get more information</button>
            </figure>
            
        </div>
    )
}

export default Listelement
