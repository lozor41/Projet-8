import { Link } from 'react-router-dom'
import Logo from '../Image/Logo.jpg'
 
function Header() {
    return (
        <nav>
        <div id='header'>
        <img src={Logo} alt="logo" id='logoheader'></img>
        <div id='buttonheader'>
            <Link to="/" id='buthome'>Accueil</Link>
            <Link to="/Propos" id='butpropos'>A Propos</Link>
        </div>
        </div>    
        </nav>
    )
}

export default Header