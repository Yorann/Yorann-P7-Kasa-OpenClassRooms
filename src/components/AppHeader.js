import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function AppHeader() {
	return (
		<div>
			<header>
				<Link to="/">
					<img src={logo} alt="logo Kasa" className="logo" />
				</Link>
				<nav>
					<ul className="nav">
						<li>
							<Link to="/">Accueil</Link>
						</li>
						<li>
							<Link to="/about">A Propos</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}

export default AppHeader;
