import logo from '../images/logo-footer.svg'

function Footer() {
    return (
        <div className='footercontainer'>
            <footer className='footer'>
                <div className='footer__content'>
                    <img src={logo} alt="logo kasa" className="footer__logo"/>
                    <p className="footer__logo__info">© 2020 Kasa. All rights reserved </p>
                </div>
            </footer>
        </div>
    )
}
export default Footer