import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//api-kald
import { getWineryById, changeWinery } from "../../../helpers/apikald";

// Vi sender props med over for at ramme id
const EditWineries = (props) => {
  // States til at rumme data
  const [winery, setWinery] = useState();
  const [fejl, setFejl] = useState();
  const [loader, setLoader] = useState();
  const history = useHistory(); // Giver mulighed for at "gå tilbage" i browseren

  // Kalder på api for at ramme det specifikke id, der skal rettes
  useEffect(() => {
    getWineryById(props.match.params.id)
      .then((data) => {
        setWinery(data);
        setFejl();
      })
      .catch((err) => {
        setFejl("Der er sket en fejl!");
        setWinery();
      });
  }, []);

  // Funktion der håndterer klik på button
  const handleSubmit = (e) => {
    e.preventDefault(); // Forhindrer reload af komponent
    setLoader(true);

    // Vi pakker data ind i FormData til api
    const formData = new FormData(e.target);

    changeWinery(props.match.params.id, formData)
      .then((data) => {
        console.log(data);
        setLoader(false);
        // Hvis gået godt, redirect til "oversigten" ved at gå 1 step tilbage
        history.goBack();
      })
      .catch((error) => {
        console.log(error);
        setFejl("Der er sket en fejl");
        setLoader(false);
      });
  };

  return (
    <div>
      <h1>You are about to edit information on a certain winery</h1>

      {/* Data er klar til at blive rettet */}
      {winery && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Country:{" "}
              <input
                name="country"
                defaultValue={winery.country}
                type="text"
                placeholder="Type in country"
              />
            </label>
            <br />
            <label>
              Name:{" "}
              <input
                name="name"
                defaultValue={winery.name}
                type="text"
                placeholder="Type in name of winery"
              />
            </label>
            <br />
            <label>
              Location:{" "}
              <input
                name="location"
                defaultValue={winery.location}
                type="number"
                placeholder="Type in area"
              />
            </label>
            <br />
            <label>
              Description:{" "}
              <input
                name="description"
                defaultValue={winery.description}
                type="text"
                placeholder="Type in description"
              />
            </label>
            <br />
            <label>
              Price:{" "}
              <input
                name="price"
                defaultValue={winery.price}
                type="number"
                placeholder="Type in price of wine tasting"
              />
            </label>
            <br />
            <label>
              Address:{" "}
              <input
                name="adress"
                defaultValue={winery.adress}
                type="text"
                placeholder="Type in address"
              />
            </label>
            <br />
            <label>
              Phone number:{" "}
              <input
                name="phone"
                defaultValue={winery.phone}
                type="number"
                placeholder="Type in phone number"
              />
            </label>
            <br />
            <label>
              Email:{" "}
              <input
                name="mail"
                defaultValue={winery.mail}
                type="text"
                placeholder="Type in email"
              />
            </label>
            <br />
            <label>
              Opening hours:{" "}
              <input
                name="openinghrs"
                defaultValue={winery.openinghrs}
                type="text"
                placeholder="Type in opening hours"
              />
            </label>
            <br />
            <label>
              Website:{" "}
              <input
                name="website"
                defaultValue={winery.website}
                type="text"
                placeholder="Type in website url"
              />
            </label>
            <br />
            {/* <input name="image" type="file" id="img" accept="image/*" placeholder="Vedhæft billede" />
                        <br /> */}
            <input type="submit" placeholder="Edit winery" />
          </form>
        </div>
      )}

      {/* Mens vi venter på data + der er endnu ikke vejr eller fejl */}
      {
        // Loader
        !winery && !fejl && (
          <>
            <p>Loader...</p>
          </>
        )
      }

      {/* Hvis der er fejl */}
      {fejl && (
        <>
          <p>{fejl}</p>
        </>
      )}
    </div>
  );
};

export default EditWineries;
