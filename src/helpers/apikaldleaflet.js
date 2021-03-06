import axios from "axios"

// OpenWeatherMap

// basisoplysninger som skal bruges i flere af api-kaldene

const api = {
// http://api.openweathermap.org/data/2.5/weather?zip=8500,DK&appid=3e5c0a19005ea11716a0fbe95cf01e31&units=metric&lang=da

    basisUrl: "http://api.openweathermap.org/data/2.5/",
    parameter: "&appid=3e5c0a19005ea11716a0fbe95cf01e31&units=metric&lang=da",
    imageURL: "http://openweathermap.org/img/wn/"
} 



// IMAGE.................

export let imageURL = api.imageURL;

// ---weather---
//--------------

export const getAllWinerysByZip = (byNavne) => {

    //weather?q= (her har vi skiftet zipcode ud med q(query), og slettet ,DK, så den ikke søger på postnummer)
    let svar = axios.get(api.basisUrl + "weather?q=" + byNavne + api.parameter)

  
    // then betyder vi er liiiiige nød til at vente på svaret kommer - OG SÅ skal vi

    .then (response => {return response.data})
    console.log(byNavne)
    return svar
}