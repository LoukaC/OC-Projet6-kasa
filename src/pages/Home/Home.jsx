import React from 'react'
import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallery/Gallery'
import './Home.scss'
import BackGroundImage from '../../images/banner.png'

function Home() {
  return (
    <div className="home">
      <Banner
        backgroundUrl={BackGroundImage}
        title="Chez vous, partout et ailleurs"
        linearGradient="linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
      />
      <Gallery />
    </div>
  )
}

export default Home
