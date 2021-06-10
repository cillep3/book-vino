import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

// Apikald
import { getAllWineries, deleteWinery } from '../helpers/apikald'

const AdminWinery = () => {

    // State (til at rumme data)
    const [winery, setWinery] = useState()
    const [fejl, setFejl] = useState()
    const [besked, setBesked] = useState()


    // UseEffect (til at kalde api'et når componentet er loadet)
    useEffect(() => {
        getAllWineries().then(data => {
            console.log(data);
            setWinery(data);
            setFejl(); // Tøm fejlbesked, hvis der har været en fejl og fejlen nu er blevet løst.
        }).catch(err => {
            console.log(err)
            setFejl("Der er sket en fejl!")
            setWinery()
        })
    }, [besked]) // useEffect gør sit arbejde  ved load af component + ved ændring til staten "besked"


    // Håndter slet ved klik på slet-knap
    const handleSlet = (wineryId) => {


        // Dette gør at der kommer en boks op, som vi kan vælge at sige ok til
        if (window.confirm("Vil du slette dette? Det kan ikke fortrydes!")) {



            console.log("Her skal slettes ....", wineryId)
            // Slet ... husk at sende ID med på den der skal slettes
            deleteWinery(wineryId).then(data => {
                console.log(data);
                setBesked(data);
                setFejl(); // tøm fejlbesked, hvis der har været en fejl og fejlen nu er løst
            }).catch(err => {
                console.log(err)
                setFejl("Der er sket en fejl!")
                setBesked()
            })

        }

    }


}



return (
    <div>
        <h1>Ret eller slet et winery</h1>
        {/* ---------- Data er klar og map'es ud */}
        {
            winery &&
            <>
                <h2>Antal wineries: {winery.length}</h2>
                {
                    winery.map(w => (
                        // første element i map skal altid have en key som er unik - her bruger vi _id fra Mongo
                        <div key={w._id}>
                            <p>
                                <AiFillDelete onClick={() => handleSlet(w._id)} />
                                <Link to={"/Retwinery/" + w._id} > <AiFillEdit /></Link>
                                {/* Når vi skriver link, så kommer vi over i fanen rettodo
                                    AiFillDelete og onclick gør at vi der kommer icon frem. */}

                                {w.titel} ... {w._id}
                            </p>
                        </div>
                    ))
                }
            </>
        }


        {/* ---------- Vi venter på data (endnu ingen data - og heller ingen fejl) */}
        {
            !todo && !fejl &&
            <h1>Loader ....</h1>
        }

        {/* ---------- Der er opstået en fejl */}
        {
            fejl &&
            <h1>{fejl}</h1>
        }

    </div>
)


export default AdminWinery
