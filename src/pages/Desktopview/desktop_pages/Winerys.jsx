import {useEffect, useState} from 'react'
import '../Desktop.scss'
import Register from '../../../helpers/register.json'
import Liste from '../../../components/Listelement'
import Map from '../../../components/Kort'
import TextField from "@material-ui/core/TextField"
import { getAllWinerysByZip } from '../../../helpers/apikaldleaflet'

const Winerys = () => {
  return (
    <div id="allwineriesContainer">
      <section>
        <h1>section</h1>
      </section>
      <figure>
        <h1>figure</h1>
      </figure>
    </div>
  )
}

export default Winerys
