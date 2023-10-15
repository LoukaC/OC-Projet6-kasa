import React from 'react'
import './Gallery.css'
import Appartment from '../../components/Appartment/Appartment'

function Gallery() {
  return (
    <div className="gallery">
        <Appartment />
        <Appartment />
        <Appartment />
        <Appartment />
        <Appartment />
        <Appartment />
    </div>
  )
}

export default Gallery