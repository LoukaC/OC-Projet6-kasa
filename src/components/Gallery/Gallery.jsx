import React, { useEffect, useState } from 'react'
import './Gallery.scss'
import Appartment from '../../components/Appartment/Appartment'





function Gallery() {
  const [apartments, setApartments] = useState([])
  // Utilisation de useState pour initialiser le state 'apartments' à un tableau vide

  useEffect(fecthApartments, [])
  // Utilisation de useEffect pour effectuer une requête de données au chargement du composant
  //useEffect avec une array vide exécute la fonction au chargement du composant

  function fecthApartments() {
    fetch('DataBase.json')
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error)
  }

  return (
    <div className="gallery">
      {apartments.map((apartment) => (
        <Appartment title={apartment.title} />
      ))}
    </div>
  )
}

export default Gallery