import orangestar from "../images/orangestar.png";
import greystar from "../images/greystar.png";

//Crée un tableau avec 5 entrées en passant l'objet rating... Enumère ce tableau en affichant les etoiles oranges tant qu'elles
//sont inferieurs ou égale a la valeur de l'objet rating dans les tableau datas en ensuite en grises pour les restantes
function Rating({rating}) {
	return (
		<div className="accomodation_content_host_stars">
			{[...Array(5)].map((_stars, index) => {
				const ratingValue = index + 1;
				return (
					<img
						key={index}
						src={ratingValue <= rating ? orangestar : greystar}
						alt="stars"
					/>
				);
			})}
		</div>
	);
}

export default Rating