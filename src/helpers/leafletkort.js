import "leaflet/dist/leaflet.css";
import L from "leaflet";


let mymap, marker;

export const makeCard = (koordinater = [54,22] ) => {
    

    console.log("makeCard")

    //let koordinater = [56,10];
    mymap = L.map("mapcontainer").setView(koordinater, 10) // her loader vi kortet første gang og 8 er zoom ud.

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);


}

// Vis et andet udsnit (anden by/postnummer)
export const changeCardView = (koordinater) => {
    
    //Her er slettet tal, og i stedet for sat koordinater ind, så den automatisk finder byer når man skriver bynavne.
    mymap.setView(koordinater, 10)

}

// Denne funktion kaldes når der skal "ryddes op" (kortet fjernes) når en component med map "slukkes"
export const deleteCard = () => {
    mymap.off()
    mymap.remove()
}