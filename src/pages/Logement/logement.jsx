import React from 'react'
import './logement.scss'
import Carrousel from '../../components/Carrousel/Carrousel'
import BarInfo from '../../components/BarInfo/BarInfo'

function Logement() {
  return (
    <div className="logement">
      <div>
        <Carrousel />
      </div>
      <div className="logementInfo">
        <h3>Title-logement</h3>
        <h4>location</h4>
        <p>keyword</p>
        <p>keyword</p>
        <p>keyword</p>
      </div>
      <div className="logementOwner">
        <h3>owner</h3>
        <img src="https://picsum.photos/100/100" alt="" />
        <p>rating</p>
      </div>

      <div className="logementBarInfo">
        <BarInfo />
        <BarInfo />
      </div>
    </div>
  )
}

export default Logement
