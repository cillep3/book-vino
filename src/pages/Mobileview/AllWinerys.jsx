import { useState, useEffect } from 'react'
import React from 'react'
import Kort from "../../components/Kort"


import { getAllWinerysByZip, imageURL } from "../../helpers/apikaldleaflet"

const AllWinerys = (props) => {

    // 8000 betyder at den viser postnumer fra starten af
    // alt det som kommer ind i [] vil være navnet på vores data. vejret er classen og setVejret gør at vi kan ændre den.


    const [postnummer, setPostnummer] = useState("8000") // BRUGERENS VALGTE POSTNUMMER // BLÅ ER EN useSTATE
    const [AllWinerys, setAllWinerys] = useState() // VEJRDATA 
    const [error, setError] = useState() // FEJLBESKEDER



    // alt det der skal ske, skrives i [] (når denne er loadet hentes vejret)
    useEffect(() => {

        // setTimeout(() => {

        if (postnummer.length === 4) {

            getAllWinerysByZip(postnummer).then(winerydata => {

                console.log(winerydata)
                setAllWinerys(winerydata); // put vejrdata i vejrdata-state
                setError();          // Tøm fejlbesked

                props.koord([winerydata.coord.lat, winerydata.coord.lon])

                // for at gribe fejlene som kommer tilbage - gemmes i error.
            }).catch(err => {

                console.log(err)
                setError(err) // Put fejlbesked i errorstate / ER SERVICE NEDE ELLER HAR DU INDTASTET FORKERT POSTNUMMER

            })
        }


        //  }, 3000)

    }, [postnummer])

    const stortForbogstav = (teksten) => {

        // Gør at vejrbeksrivelsen altid er med stort forbogstav

        return teksten.charAt(0).toUpperCase() + teksten.slice(1);
    }

    //unixtid er tindspunket i sekunder. Skal ganges med 1000 fordi JS arbejder med millisekunder
    const beregningsTidspunkt = (unixtid) => {

        return new Date(unixtid * 1000).toLocaleTimeString("da-dk", { hour: "numeric", minute: "2-digit" });
    }

    return (


        <div>

            <h1>Winerys {postnummer} </h1>

            <h2>Tast et postnummer og få alle Winerys</h2>
            <input type="text" onChange={(e) => setPostnummer(e.target.value)} />

            {/* Hvis der er Winerydata */}

            {

                AllWinerys &&

                <div>
                    <h1>{AllWinerys.name} </h1>

                    {/* hører sammen med linje 50 */}
                    <p>{stortForbogstav(AllWinerys.weather[0].description)} </p>
                    <img src={"http://openweathermap.org/img/wn/" + AllWinerys.weather[0].icon + "@2x.png"} />
                    <img src={imageURL + AllWinerys.weather[0].icon + "@2x.png"} />

                    <p>solen står op kl. {beregningsTidspunkt(AllWinerys.sys.sunrise)} og går ned kl.{beregningsTidspunkt(AllWinerys.sys.sunset)} </p>
                    {/* <h1>Fejl: {error.response.data.cod} {error.response.data.message} {error.response.statusText} </h1> */}
                </div>
            }

            {
                //LOADER // udråbdstegn kan oversættes til "ikke".. Der er "ikke vejr data og der er ikke fejl"
                !AllWinerys && !error &&

                <div>
                    <h1>Vejrdata loader - vent venligst</h1>


                </div>


            }

            {/* kort indlæses her */}

            {

                AllWinerys &&
                <Kort koordinater={[AllWinerys.coord.lat, AllWinerys.coord.lon]} />

            }



        </div>

    )
}

export default AllWinerys;