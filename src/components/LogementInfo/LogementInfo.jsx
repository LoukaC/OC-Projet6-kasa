import React from 'react'
import './LogementInfo.scss'

function LogementInfo(props) {
  return (
    <div className="logementInfo">
      <div className="logementTitreLocation">
        <div className="logementTitle">{props.title}</div>
        <div className="location">{props.location}</div>
      </div>
      <div className="tags">
        <div className="tag">{props.tags}</div>
        <div className="tag">tag2</div>
        <div className="tag">tag3</div>
      </div>
    </div>
  )
}

export default LogementInfo