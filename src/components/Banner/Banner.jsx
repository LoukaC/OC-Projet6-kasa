import React from 'react'
import './Banner.css'

function Banner(props) {
 

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `${props.linearGradient},url(${props.backgroundUrl})`,
      }}
    >
      <h1>{props.title}</h1>
    </div>
  )
}

export default Banner
