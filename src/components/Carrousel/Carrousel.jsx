import React, { useState } from 'react'
import './Carrousel.scss'

function Carrousel(props) {
  // Utilisation du hook useState pour gérer l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0)

  // Gestion du clic sur le bouton pour afficher l'image suivante
  const handleNext = () => {
    // Vérification que props.imgUrl est défini et contient des éléments
    if (props.imgUrl && props.imgUrl.length > 0) {
      // Modification de l'index pour afficher l'image suivante
      setCurrentIndex((currentIndex + 1) % props.imgUrl.length)
    }
  }

  // Gestion du clic sur le bouton pour afficher l'image précédente
  const handlePrev = () => {
    // Vérification que props.imgUrl est défini et contient des éléments
    if (props.imgUrl && props.imgUrl.length > 0) {
      // Modification de l'index pour afficher l'image précédente
      setCurrentIndex(
        (currentIndex - 1 + props.imgUrl.length) % props.imgUrl.length,
      )
    }
  }

  return (
    <div className="carrousel">
      {/* Vérification que props.imgUrl est défini et contient des éléments */}
      {props.imgUrl && props.imgUrl.length > 0 ? (
        // Affichage de l'image en fonction de l'index actuel
        <img src={props.imgUrl[currentIndex]} alt={props.title} />
      ) : (
        // Affichage d'un message s'il n'y a pas d'image à afficher
        <p>pas d'image</p>
      )}
        {/* Ajout d'un bouton pour afficher l'image précédente au clic */}
        <i className="fa-solid fa-chevron-left fa-5x" onClick={handlePrev}></i>
        {/* Ajout d'un bouton pour afficher l'image suivante au clic */}
        <i className="fa-solid fa-chevron-right fa-5x" onClick={handleNext}></i>
      {/* Affichage du compteur indiquant l'index actuel de l'image par rapport au nombre total d'images */}
      {props.imgUrl && props.imgUrl.length > 0 && (
        <div className="count">{`${currentIndex + 1}/${
          props.imgUrl.length
        }`}</div>
      )}
    </div>
  )
}

export default Carrousel
