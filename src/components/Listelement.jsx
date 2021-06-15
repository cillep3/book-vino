import React from 'react'
import './Listelement.scss'

// Import of components
import Register from '../helpers/register.json'

const Listelement = () => {
    return (
        <div id="listContainer">
            <figure id="listElement">
                {
                    <>
                    <img src={Register.winery[0].image} alt="Marchesini Marcello" />
                    <h1>{Register.winery[0].title}</h1>
                    <img src={Register.winery[0].stars} alt="Marchesini Marcello" />
                    
                    </>
                }
            </figure>
            <button>Get more information</button>
        </div>
    )
}

export default Listelement
