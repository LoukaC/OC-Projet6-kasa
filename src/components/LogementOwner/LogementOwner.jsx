import React from 'react'
import './LogementOwner.scss'


function LogementOwner(props) {

  const renderStars = (nombreEtoiles) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= nombreEtoiles) {
        stars.push(<i key={i} className="fa-solid fa-star"></i>)
      } else {
        stars.push(<i key={i} className="fa-solid fa-star starInactive"></i>)
      }
    }
    return stars
  }


  return (
    <div className="logementOwner">
      <div className="Owner">
        <div className="nameOwner">{props.name}</div>
        <div className="pictureOwner">
          <img src={props.picture} alt={props.name} />
        </div>
      </div>
      <div className="ratingOwner">{renderStars(props.nombreEtoiles)}</div>
    </div>
  )
}

export default LogementOwner