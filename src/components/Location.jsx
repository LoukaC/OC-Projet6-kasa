function Location() {
  return (
    <div>
      <h2>Titre de la location</h2>
    </div>
  )
}

export default Location


const [apartment, setApartment] = useState([])
// Déclaration de l'état 'apartment' avec un objet vide comme valeur initiale

const id = useParams() // Utilisation de useParams pour extraire les paramètres de l'URL, dans ce cas l'ID
console.log(id)

useEffect(fecthApartment, [])
// Utilisation de useEffect pour effectuer une requête de données au chargement du composant
// Utilisation de l'ID comme dépendance pour que useEffect se déclenche à chaque changement de l'ID

function fecthApartment() {
  fetch('DataBase.json')
    .then((res) => res.json())
    .then((res) => console.log(res))
    .then((res) => {
      // Recherche de l'appartement correspondant à l'ID dans les données récupérées
      const selectedApartment = res.find((apartment) => apartment.id === id)
      console.log(selectedApartment)
      setApartment(selectedApartment) // Mise à jour de l'état 'apartment' avec les informations de l'appartement trouvé
    })
    .catch(console.error)
}