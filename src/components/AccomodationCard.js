import { Link } from 'react-router-dom'

/**
 * 
 * Génere unlien vers la page accomodation à partir de son id 
 * Affiche une carte hebergement avec sa photo incluse dans une entrée cover, une description incluse dans une entrée title
 * et son titre incluse dans une entrée title.
 * 
 * @param {*} param0 
 * @returns 
 */
function Card({id, title, cover}) {
	return (
		<Link to={`/accomodationpage/${id}`}>
            <div className="accomodation-card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
            </div>
		</Link>
	)
}
export default Card