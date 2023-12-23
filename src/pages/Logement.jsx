import { useGetById } from '../components/Api'
import { useParams } from 'react-router'
import { Error } from './Error'
import { Link } from 'react-router-dom'

const Logement = () => {
    const { id } = useParams()
    const { data, isLoading, error } = useGetById(id)

    if (error) return <Link to="/Error" id="error"></Link>

    return (
        <div>
            {isLoading ? (
                <div>Chargement...</div>
            ) : (
                <div>
                    <span>{data.id}</span>
                    <span>{data.description}</span>
                </div>
            )}
        </div>
    )
}

export default Logement
