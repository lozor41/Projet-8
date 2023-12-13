import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/Logement">Logement</Link>
            <Link to="/Propos">A Propos</Link>
        </nav>
    )
}

export default Header