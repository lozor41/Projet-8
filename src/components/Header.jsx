import { NavLink } from 'react-router-dom'
import Logo from '../Image/Logo.jpg'

function Header() {
    return (
        <nav>
            <div id="header">
                <img src={Logo} alt="logo" id="logoheader"></img>
                <div id="buttonheader">
                    <NavLink to="/" id="buthome">
                        <nav>Accueil</nav>
                    </NavLink>
                    <NavLink to="/About" id="butpropos">
                        A Propos
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header
