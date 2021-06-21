import { useState, useEffect } from 'react'
import React from 'react'

import Kort from "../../../components/Kort"
import TextField from "@material-ui/core/TextField"

import Register from "../../../helpers/register.json"
import Liste from '../../../components/Listelement'




import { getAllWinerysByZip, imageURL } from "../../../helpers/apikaldleaflet"

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

    const stortForbogstav = (teksten) => {

        // Gør at Vintekst beksrivelsen altid er med stort forbogstav

        return teksten.charAt(0).toUpperCase() + teksten.slice(1);
    }

    //unixtid er tindspunket i sekunder. Skal ganges med 1000 fordi JS arbejder med millisekunder
    const beregningsTidspunkt = (unixtid) => {

        return new Date(unixtid * 1000).toLocaleTimeString("da-dk", { hour: "numeric", minute: "2-digit" });
    }

    return (

        <>

            <div id="kortContainer">
                <div id="textField" onChange={(e) => setbyNavne(e.target.value)}>
                    <TextField
                        variant="outlined"
                        color="standard"
                        label="Choose Area"
                        size="small"
                    />
                </div>
                {
                    // Her kommer Winerydata ind når man trykker. 
                    AllWinerys &&
                    <div>
                        <h1>{AllWinerys.name} </h1>
                    </div>
                }
                {
                    AllWinerys &&
                    <div id="kort">
                        <Kort koordinater={[AllWinerys.coord.lat, AllWinerys.coord.lon]} />
                    </div>

                }
            </div>

            <h1 id="allWineriesHeadline">Wineries</h1>
            <div className="listeallwineries"><Liste /></div>
        </>


    )
}

export default AllWinerys;
