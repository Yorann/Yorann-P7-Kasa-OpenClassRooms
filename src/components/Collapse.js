import { createRef, useState } from 'react';

//Crée un composent qui construit une liste ul dont les éléments sont énumérés en fonction de leur index
function CollapseUl({ content }) {
	return (
		<ul>
			{content.map((item, index) => {
				return <li key={index}>{item}</li>;
			})}
		</ul>
	);
}

/*
 * A partir d'un titre et d'un contenu retourne une balise div avec un titre et un contenu.
 * Si le contenu est un tableau alors énumère les éléments dans une liste ul.
 * Si le contenu n'est pas un tableau alors il s'affiche dans une balise p.
 * Selon le clique, la fleche du titre se retourne et le contenu apparait grâce au changement de classe.
 */
function Collapse({ title, content }) {
	//Definie les valeurs par defaut de hauteur et d'opacité à zéro à l'objet toggle
	const [toggle, setToggle] = useState({ height: 0, opacity: 0 });

	//Definie la valeur de l'état à false à l'objet activated
	const [activated, setActive] = useState(false);

	//Definie la fonction createRef de react dans la constante collapse
	const collapse = createRef();

	/*Si l'objet activated est à son contraire: toggle prend pour valeur (setToggle) la hauteur de reference du contenu et une opacité de 1. 
    et set active prend la valeur (setActive) false.*/
	//Sinon toogle prend la hauteur 0 et l'opacité 0 et active prend la valeur false.
	const setCollapse = () => {
		if (!activated) {
			setToggle({ height: collapse.current.scrollHeight, opacity: 1 });
			setActive(true);
		} else {
			setToggle({ height: 0, opacity: 0 });
			setActive(false);
		}
	};

    /* 
    Contruit la structure html et assigne l'évenement Onclick au titre du collapse.
    *Selon le clique, la fleche du titre se retourne grâce au changement de classe.
    *Assigne le style toggle avec pour réference collapse au contenu des collapses
    *Si le contenu est un tableau alors énumère les éléments dans une liste ul grace aux composent CollapseUl.
    *Si le contenu n'est pas un tableau alors il s'affiche dans une balise p.
    */
	return (
		<div className="collapse">
			<h3 className="collapse_title" onClick={() => setCollapse()}>
				{title}
				<img
					className={
						activated ? 'arrow arrow-up' : 'arrow arrow-down'
					}
					src="/images/arrow.png"
					alt="show content"
				/>
			</h3>

			<div className="collapse_content" style={toggle} ref={collapse}>
				{Array.isArray(content) ? (
					<CollapseUl content={content} />
				) : (
					<p>{content}</p>
				)}
			</div>
		</div>
	);
}

export default Collapse;
