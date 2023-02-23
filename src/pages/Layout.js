import { Outlet } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';

/**
 * Layout pour toutes les pages (Outlet correspond au contenu)
 * @returns 
 */
function Layout() {
	return (
		<div className="App">
			<AppHeader />
			<Outlet />
			<Footer />
		</div>
	);
}

export default Layout;
