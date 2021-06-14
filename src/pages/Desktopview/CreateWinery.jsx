import { useState} from 'react'

// API CALL
import { createWinery } from '../../helpers/apikald'

const CreateWinery = () => {
    // States that contains data
    const [winery, setWinery] = useState()
    const [fejl, setFejl] = useState()
    const [loader, setLoader] = useState()

    // Functions that sends input to API
    const handleSubmit = (e) => {
        e.preventDefault() // Stops reload
        setLoader(true)

        // Data is put into FormData
        const formData = new FormData(e.target); 

        // We send formData to API
        createWinery(formData).then (data => {
            setWinery(data) //Searcg for response from API
            setFejl()
            e.target.reset() //Resets inputs
            setLoader(false)
        }).catch(error => {
            setFejl("There has occurred an error")
            setWinery()
            setLoader(false)
        })
    }

    return (
        <div id="createContainer">
            <h1>Create your winery here</h1>

            <form onSubmit={handleSubmit}>
                <input name="country" type="text" placeholder="Type in country" />
                <br />
                <input name="name" type="text" placeholder="Type in name of winery" />
                <br />
                <input name="location" type="number" placeholder="Type in area" />
                <br />
                <input name="description" type="text" placeholder="Type in description" />
                <br />
                <input name="price" type="number" placeholder="Type in price of wine tasting" />
                <br />
                <input name="adress" type="text" placeholder="Type in address" />
                <br />
                <input name="phone" type="number" placeholder="Type in phone number" />
                <br />
                <input name="mail" type="text" placeholder="Type in email" />
                <br />
                <input name="openinghrs" type="text" placeholder="Type in opening hours" />
                <br />
                <input name="website" type="text" placeholder="Type in website url" />
                <br />
                {/* <input name="image" type="file" id="img" accept="image/*" placeholder="Vedhæft billede" />
                <br /> */}
                <input type="submit" placeholder="Create winery" />
                <br />
            </form>

            {/* Data has been created */}
            {
                winery &&
                <div>
                    <h3>You have created a new winery:</h3>
                    <div>
                        <p>Country: {winery.oprettet.country} </p>
                        <p>Name: {winery.oprettet.name} </p>
                        <p>Location: {winery.oprettet.location} </p>
                        <p>Description: {winery.oprettet.description} </p>
                        <p>Price: {winery.oprettet.price} </p>
                        <p>Email: {winery.oprettet.mail} </p>
                        <p>Opening hours: {winery.oprettet.openinghrs} </p>
                        <p>Website: {winery.oprettet.website} </p>
                        {/* <img className="pictures" src={"http://localhost:5056/images/" + winery.oprettet.image} width="200px"/> */}
                    </div>
                </div>
            }

            {/* Der er endnu ikke svar fra api'et (hverken data eller fejl) - vi afventer */}
            {
                loader &&
                <h3>Loader...</h3>
            }

            {/* Der er opstået en fejl - giv besked til brugeren */}
            {
                fejl &&
                <h3>{fejl}</h3>
            }

        </div>
    )
}

export default CreateWinery
