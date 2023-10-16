import React, { useState } from 'react';
import './BarInfo.scss';

function BarInfo({title, paragraph}) {
  // Utilisation de useState pour gérer l'état de l'expansion
  const [isExpanded, setIsExpanded] = useState(false)

  // Fonction pour inverser l'état d'expansion lors du clic sur la barre supérieure
  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="barInfo">
      {/* Barre supérieure avec le titre et les icônes de chevron */}
      <div className="topBar" onClick={toggleExpand}>
        <h2>{title}</h2> {/* Utilisation de la prop 'title' pour le titre */}
        <div className={isExpanded ? 'chevronUp' : 'chevronDown'}>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <div className={isExpanded ? 'chevronDown' : 'chevronUp'}>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      {/* Paragraphe affiché si isExpanded est vrai */}
        <p className={isExpanded ? 'expanded' : ''}>{paragraph}</p>
        {/* Utilisation de la prop 'paragraph' pour le contenu du paragraphe */}
    </div>
  )
}

export default BarInfo;




