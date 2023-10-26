import Banner from "../../components/Banner/Banner"
import BarInfo from "../../components/BarInfo/BarInfo"
import './Apropos.scss'
import BackGroundImage from '../../images/bannerApropos.png'

function APropos() {
  return (
    <div className="Apropos">
      <Banner
        backgroundUrl={BackGroundImage}
        title=""
        linearGradient="linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))"
      />
      <div className="AproposBox">
        <BarInfo
          title="Fiabilité"
          paragraph="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <BarInfo
          title="Respect"
          paragraph="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <BarInfo
          title="Service"
          paragraph="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
        <BarInfo
          title="Sécurité"
          paragraph="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  )
}

export default APropos
