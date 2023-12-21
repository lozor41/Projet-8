import { Link } from 'react-router-dom'

const Card = ({ data }) => (
    <Link to={`/Logement/${data.id}`}>
        <div id="card">
            <img src={data.cover} alt={data.title} />
            <h2>{data.title}</h2>
        </div>
    </Link>
)

export default Card
