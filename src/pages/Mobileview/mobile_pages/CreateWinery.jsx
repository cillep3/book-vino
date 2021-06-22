import { useState} from 'react'

// API CALL
import { createWinery } from '../../../helpers/apikald'

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
            <h1 id="createHeadline">Create winery</h1>

            <form id="createForm" onSubmit={handleSubmit}>
                <label for="country">Country</label>
                <input name="country" type="text" placeholder="Type in country" />
                <br />
                <label for="name">Winery name</label>
                <input name="name" type="text" placeholder="Type in name of winery" />
                <br />
                <label for="location">Area</label>
                <input name="location" type="number" placeholder="Type in area" />
                <br />
                <label for="description">Description</label>
                <textarea name="description" type="text" placeholder="Type in description" cols="30" rows="10" />
                <br />
                <label for="price">Price</label>
                <input name="price" type="number" placeholder="Type in price of wine tasting" />
                <br />
                <label for="adress">Address</label>
                <input name="adress" type="text" placeholder="Type in address" />
                <br />
                <label for="phone">Phone no.</label>
                <input name="phone" type="number" placeholder="Type in phone number" />
                <br />
                <label for="mail">Email</label>
                <input name="mail" type="text" placeholder="Type in email" />
                <br />
                <label for="openinghrs">Opening hours</label>
                <input name="openinghrs" type="text" placeholder="Type in opening hours" />
                <br />
                <label for="website">Website</label>
                <input name="website" type="text" placeholder="Type in website url" />
                <br />
                <label for="pictures"></label>
                <input name="pictures" type="file" class="custom-file-input" id="img" accept="image/*" />
                <br /> 
                <input type="submit" placeholder="Create winery" value="Create winery"/>
                <br />
            </form>

            {/* Data has been created */}
            {
                winery &&
                <div>
                    <h3>You have created a new winery:</h3>
                    <div>
                        <p>Country: {winery.created.country} </p>
                        <p>Name: {winery.created.name} </p>
                        <p>Location: {winery.created.location} </p>
                        <p>Description: {winery.created.description} </p>
                        <p>Price: {winery.created.price} </p>
                        <p>Email: {winery.created.mail} </p>
                        <p>Opening hours: {winery.created.openinghrs} </p>
                        <p>Website: {winery.created.website} </p>
                        <img className="pictures" src={"http://localhost:5001/images/" + winery.created.pictures} width="200px"/>
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
