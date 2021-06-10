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


    // Håndter slet ved klik på slet-knap
    const handleSlet = (todoId) => {


        // Dette gør at der kommer en boks op, som vi kan vælge at sige ok til
        if (window.confirm("Vil du slette dette? Det kan ikke fortrydes!")) {



            console.log("Her skal slettes ....", todoId)
            // Slet ... husk at sende ID med på den der skal slettes
            sletTodo(todoId).then(data => {
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



    return (
        <div>
            <h1>AdminWinery</h1>
        </div>
    )
}

export default AdminWinery
