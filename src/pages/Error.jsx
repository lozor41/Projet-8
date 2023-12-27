import { Link } from 'react-router-dom'

const Error = () => (
    <div id="error">
        <h1>404</h1>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <Link to="/" id="returnhome">
            Retourner sur la page d'accueil
        </Link>
    </div>
)

export default Error
