//import arrowright from '../images/arrowright.png'
import { useState } from 'react'

/**
 * Définie l'index des images à 0(premier élément) puis l'augmente ou soustrait de 1 en fonction de deux fonctions. 
 * @param {*} param0 
 * @returns 
 */

 function Slider({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0)
// Ajoute 1 à l'index , si l'index est égale au dernier élément du tableau definie l'index à zero(premier élément du tableau)
    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }
// Soustrait 1 à l'index, si l'index est égale au premier élément du tableau definie l'index au dernier élément du tableau
    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    return (
		<section
			//Affiche la première image du tableau d'url
			//Retourne si nombre d'entrés du tableau est superieur à 1 les balises contenant les flèches gauche et droite
			//dont le clique modifie l'index comme indiqué au dessus
			//Affiche un compteur qui montrent l'image vue par l'utilisateur sur le nombre d'images visible
			className="slider"
		>
			{imageSlider.map((img, index) => {
				return (
					<div className={currentIndex === index ? 'slider_content slider_content-active' : 'slider_content'} key={index}> 
						<img src={img} alt={`Appartement ${index}`} />
					</div>
				);
			})}

			{imageSlider.length > 1 && (
				<div>
                    
					<img
						className="slider_arrow slider_arrow_right"
						src="./images/arrowright.png"
						alt="next slider"
						onClick={nextSlide}
					/>
					<img
						className="slider_arrow slider_arrow_left"
						src="./images/arrowleft.png"
						alt="previous slider"
						onClick={prevSlide}
					/>
					<div className="slideCounter">
						{currentIndex + 1} / {imageSlider.length}
					</div>
				</div>
			)}
		</section>
	);
}

export default Slider;