import '../../style/Error404.css'
import { Link } from 'react-router-dom'

function Error404 () {
    return (
        <div className="Error404Container">  
            <div className='E404'>   
                <h1 className='size'>404</h1>
            </div> 
            <div className='sizeContainer'>
                <p>Oups! la page que&nbsp;</p>
                <p>vous demandez n'existe pas.</p>
            </div>
            <nav>
                <Link to="/" className='linkColor'><span>Retourner sur la page d'accueil</span></Link>
            </nav>
        </div>
    )
}

export default Error404;