import React, { useState } from 'react'
import './BarInfo.scss'

function BarInfo(props) {
  // Utilisation de useState pour gérer l'état de l'expansion
  const [isExpanded, setIsExpanded] = useState(false)

  // Fonction pour inverser l'état d'expansion lors du clic sur la barre supérieure
  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }


return (
  <div className=' barInfo'>
    <div className="topBar" onClick={toggleExpand}>
      <h2>{props.title}</h2>
      <div className={isExpanded ? 'chevronUp rotated' : 'chevronUp'}>
        <i className="fa-solid fa-chevron-up"></i>
      </div>
    </div>
    <p className={(isExpanded ? 'visible' : 'hidden') + ' description_content'}>
      {props.paragraph}
    </p>
  </div>
)
}

export default BarInfo
