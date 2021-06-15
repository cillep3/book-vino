import "leaflet/dist/leaflet.css";
import L from "leaflet";


let mymap, marker;

export const makeCard = (koordinater = [56,10] ) => {

    console.log("makeCard")

    //let koordinater = [56,10];
    mymap = L.map("mapcontainer").setView(koordinater, 8) // her loader vi kortet første gang og 8 er zoom ud.

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);


}

// Vis et andet udsnit (anden by/postnummer)
export const changeCardView = (koordinater) => {

    mymap.setView(koordinater, 13)

}

// Denne funktion kaldes når der skal "ryddes op" (kortet fjernes) når en component med map "slukkes"
export const deleteCard = () => {
    mymap.off()
    mymap.remove()
}