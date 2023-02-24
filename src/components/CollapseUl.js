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
export default CollapseUl