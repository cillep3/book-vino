import { useState, useEffect } from 'react'
import React from 'react'
import '../Mobile.scss'

// import of components
import Kort from "../../../components/Kort"
import Register from "../../../helpers/register.json"
import Liste from '../../../components/Listelement'
import { getAllWinerysByZip } from "../../../helpers/apikaldleaflet"

const AllWinerys = (props) => {

    // 8000 betyder at den viser postnumer fra starten af
    // alt det som kommer ind i [] vil være navnet på vores data. vejret er classen og setVejret gør at vi kan ændre den.

    const [byNavne, setbyNavne] = useState("Rome") // Her er zipcode skiftet ud med "bynavn"
    const [AllWinerys, setAllWinerys] = useState() // Vindata
    const [error, setError] = useState() // FEJLBESKEDER

    // alt det der skal ske, skrives i [] (når denne er loadet hentes vindata)
    useEffect(() => {

        // setTimeout(() => {
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


        {
            AllWinerys &&
        <div id="kort">
            <Kort koordinater={[AllWinerys.coord.lat, AllWinerys.coord.lon]} />
        </div>
                }
            </div >
            <h1 id="allWineriesHeadline">Wineries</h1>
            <Liste />
        </>
    )
}

export default AllWinerys;
