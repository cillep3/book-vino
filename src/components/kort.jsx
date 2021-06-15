import { useEffect } from 'react'


// map import her:
import { makeCard, deleteCard, changeCardView} from "../helpers/leafletkort";


// PROPS skal medsendes som koordinater ={[56,10]}
const Kort = (props) => {



    // når component er loadet så lav leaflet kort
    useEffect(() => {
        console.log("useEffect")
        makeCard();

        // cleanup - bruges til at rydde op i component, når component forlades.
        return () => {
            deleteCard()
        };

    }, [])


    useEffect(() => {

        // hvis vejret er lig ? med det i Array skal det gøre noget ellers skal det gøre ":" Null


            
            changeCardView(props.koordinater)
        

    }, [props.koordinater])



    return (

        
        <div>
            <h1>kort her</h1>
            <div id="mapcontainer" style={{ height: "300px", width: "450px", backgroundColor: "silver" }}></div>
            {/* kort indlæses her */}
        </div>
    )
}

export default Kort
