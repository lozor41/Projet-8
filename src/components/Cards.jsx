import { Link } from 'react-router-dom'
import Datalog from './Datalog'

const Cards = () => (
    <Link to="/Logement">
        <div id="card">
            <Datalog></Datalog>
            <h2>Titre de la location</h2>
        </div>
    </Link>
)

export default Cards
