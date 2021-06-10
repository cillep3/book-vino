import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

// Apikald
import { createWinery, deleteWinery } from '../helpers/apikald'

const AdminWinery = () => {

    // State (til at rumme data)
    const [winery, setWinery] = useState()
    const [fejl, setFejl] = useState()
    const [besked, setBesked] = useState()


    // UseEffect (til at kalde api'et når componentet er loadet)
    useEffect(() => {
        createWinery().then(data => {
            console.log(data);
            setWinery(data);
            setFejl(); // Tøm fejlbesked, hvis der har været en fejl og fejlen nu er blevet løst.
        }).catch(err => {
            console.log(err)
            setFejl("Der er sket en fejl!")
            setWinery()
        })
    }, [besked]) // useEffect gør sit arbejde  ved load af component + ved ændring til staten "besked"



    }



    return (
        <div>
            <h1>AdminWinery</h1>
        </div>
    )


export default AdminWinery
