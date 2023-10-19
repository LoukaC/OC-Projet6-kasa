import React, { useEffect, useState } from 'react'
import './logement.scss'
import Carrousel from '../../components/Carrousel/Carrousel'
import BarInfo from '../../components/BarInfo/BarInfo'
import { useParams } from 'react-router-dom'
import LogementInfo from '../../components/LogementInfo/LogementInfo'
import LogementOwner from '../../components/LogementOwner/LogementOwner'


function Logement() {
  const { id } = useParams() // Récupère l'ID de l'appartement à partir des paramètres d'URL
  console.log(id)
  const [apartment, setApartment] = useState({}) // Déclare l'état pour stocker les informations de l'appartement

  useEffect(() => {
    // Utilise useEffect pour effectuer une requête de données au chargement du composant ou à chaque changement de l'ID
    fetch('/DataBase.json') // Utilise fetch pour récupérer les données à partir du fichier JSON
      .then((res) => res.json())
      .then((data) => {
        const selectedApartment = data.find((apartment) => apartment.id === id) // Recherche l'appartement correspondant à l'ID dans les données récupérées
        setApartment(selectedApartment) // Met à jour l'état 'apartment' avec les informations de l'appartement trouvé
      })
      .catch((error) => console.error('Error fetch:', error))
  }, [id]) // Utilise l'ID comme dépendance pour que useEffect se déclenche à chaque changement de l'ID

  return (
    <div className="logement">
        <Carrousel title={apartment.title} imgUrl={apartment ? apartment.pictures : "aucunde photo"} />
      <div className="logementInfoOWner">
        <LogementInfo
          title={apartment.title}
          location={apartment.location}
          tags={
            apartment.tags
              ? apartment.tags.map((tag, index) => (
                  <ul className="tag" key={index}>
                    {tag}
                  </ul>
                ))
              : 'Aucun tag'
          }
        />
        <LogementOwner
          name={apartment.host ? apartment.host.name : 'aucun nom'}
          picture={apartment.host ? apartment.host.picture : 'aucune photo'}
          nombreEtoiles={apartment.rating ? apartment.rating : 'aucune rating'}
        />
      </div>
      <div className="logementBarInfo">
        <div className="barWidth">
          <BarInfo title="Description" paragraph={apartment.description} />
        </div>
        <div className="barWidth">
          <BarInfo
            title="Equipements"
            paragraph={
              apartment.equipments
                ? apartment.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))
                : 'Aucun équipement disponible'
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Logement
