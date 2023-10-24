import { Link } from 'react-router-dom'
import headerLogo  from '../../assets/img/headerLogo.png'
import '../../style/Header.css'


function Header() {
    return (
        <div className='bodyHeader'>
            <div className="headerContainer">
                <div className="logo">
                    <img  src={headerLogo} alt="logo" />
                </div>
                <nav className='navContainer'>
                    <div className='homeLink'>
                        <Link to="/" className='linkColor'>Accueil</Link>
                    </div>
                    <div className='aboutLink'>
                        <Link to="/About" className='linkColor'>A propos</Link>
                    </div>
                </nav>
            </div>
         </div>
    )
}

export default Header;