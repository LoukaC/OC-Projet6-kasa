import React from 'react'
import './LogementInfo.scss'

function LogementInfo(props) {
  return (
    <div className="logementInformation">
      <div className="logementTitreLocation">
        <div className="logementTitle"><h2>{props.title}</h2></div>
        <div className="location">{props.location}</div>
      </div>
        <div className="tagsBox">{props.tags}</div>
    </div>
  )
}

export default LogementInfo