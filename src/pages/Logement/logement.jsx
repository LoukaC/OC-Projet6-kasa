import React, { useEffect, useState } from 'react'
import './logement.scss'
import Carrousel from '../../components/Carrousel/Carrousel'
import BarInfo from '../../components/BarInfo/BarInfo'
import { useParams } from 'react-router-dom'
import LogementInfo from '../../components/LogementInfo/LogementInfo'
import LogementOwner from '../../components/LogementOwner/LogementOwner'

function Logement() {

  const { id } = useParams()
  console.log(id)

     const [apartments, setApartments] = useState([])
     // Utilisation de useState pour initialiser le state 'apartments' à un tableau vide

     useEffect(fecthApartments, [id])
     // Utilisation de useEffect pour effectuer une requête de données au chargement du composant
     //useEffect avec une array vide exécute la fonction au chargement du composant

     function fecthApartments() {
       fetch('DataBase.json')
         .then((res) => res.json())
         .then((res) => console.log(res))
         .then((res) => setApartments(res))
         .catch(console.error)
        
     }

  return (
    <div className="logement">
      <div>
        <Carrousel />
      </div>
      <div className="logementInfoOWner">
        <div className="logementInfo">
          <LogementInfo title="titre" location="location" tags="[tag1]"/>
        </div>
        <div className="logementOwner">
          <LogementOwner name="nom" picture="" />
        </div>
      </div>
      <div className="logementBarInfo">
        <div className="barWidth">
          <BarInfo
            title="Description"
            paragraph="zqsdqfdqfffqlllllllllllllllllllllllllllffqssfdfdsfdsf"
          />
        </div>
        <div className="barWidth">
          <BarInfo title="Equipements" paragraph="zqllffqssfdfdsfdsf" />
        </div>
      </div>
    </div>
  )
}

export default Logement
