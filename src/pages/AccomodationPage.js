import Slider from '../components/Slider';
import { useEffect, useState } from 'react';
import datas from '../AccomodationDatas/datas';
import { useParams, Navigate } from 'react-router-dom';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';

/**
 *
 * @returns
 */
function AccomodationPage() {
	// Déclare un tableau image slider
	const [imageSlider, setImageSlider] = useState([]);

	// Définie idAccomodation avec l'id située dans l'url
	const idAccomodation = useParams('id').id;

	// Définie dataCurrentAccomodation en trouvant la donnée id du tableau data égale celle située dans l'url(idAccomodation)
	const dataCurrentAccomodation = datas.find(
		(data) => data.id === idAccomodation
	);

	//Définie la liste d'images contenues dans picture de l'entrée du tableau avec pour id celle de l'url
	useEffect(() => {
		if (dataCurrentAccomodation) {
			setImageSlider(dataCurrentAccomodation.pictures);
		}
	}, [dataCurrentAccomodation]);
	if (!dataCurrentAccomodation) {
		return <Navigate to="/404Page"/>;
	}

	// Définie le nom de l'host et le sépare en 2 valeurs. Définie le nombre d'étoiles, la description et les equipements contenus
	// dans l'entrée du tableau data de l'id de l'url en question
	const name = dataCurrentAccomodation.host.name.split(' ');
	const rating = dataCurrentAccomodation.rating;
	const description = dataCurrentAccomodation.description;
	const equipments = dataCurrentAccomodation.equipments;

	return (
		<div>
			<Slider imageSlider={imageSlider} />
			<main className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{dataCurrentAccomodation.title}</h1>
						<p>{dataCurrentAccomodation.location}</p>
						<div>
							{dataCurrentAccomodation.tags.map((tag, index) => {
								return (
									<button key={`${tag}-${index}`}>
										{tag}
									</button>
								);
							})}
						</div>
					</div>
					<div className="accomodation_content_host">
						<div>
							<div className="accomodation_content_host_name">
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img
								src={dataCurrentAccomodation.host.picture}
								alt="host of this accomodation"
							/>
						</div>
						<Rating rating = {rating} />
					</div>
				</div>
				<div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={description} />
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={equipments} />
					</div>
				</div>
			</main>
		</div>
	);
}
export default AccomodationPage;
