import {useEffect, useState} from 'react'
import Register from '../../../helpers/register.json'
import Liste from '../../../components/Listelement'
import '../Desktop.scss'
import Map from '../../../components/Kort'
import TextField from "@material-ui/core/TextField"
import { getAllWinerysByZip } from '../../../helpers/apikaldleaflet'

const Winerys = () => {
  return (
    <div id="allwineriesContainer">
      <section id="cardContainer">
        <Liste />
      </section>
      <figure id="mapContainer">
        <h1>map</h1>
      </figure>
    </div>
  )
}

export default Winerys
