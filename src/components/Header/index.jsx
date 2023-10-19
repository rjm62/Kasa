import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>;
            <h1>Nous sommes dans le HEADER en construction veuillez patienter !!!!!!!!</h1>;
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>;
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/About">A propos</Link>  
            </nav>
        </div>
    );
}

export default Header;