import { Link } from 'react-router-dom';

 function NotFound() {
	return (
		<div className='notfound'>
			<div className="notfound_elements">
				<h1 className='notfound_elements_title'>404</h1>
				<p className='notfound_elements_content'>La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className='notfound_elements_backhome' to='/'><p>Retourner sur la page d'accueil</p></Link>
		</div>
	)
}
export default NotFound