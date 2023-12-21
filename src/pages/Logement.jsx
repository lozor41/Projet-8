import { useGetById } from '../components/Api'
import { useParams } from 'react-router'
import { Error } from './Error'

const Logement = () => {
    const { id } = useParams()
    const { data, isLoading, error } = useGetById(id)

    if (error) return <span>Oups il y a eu un problème</span>

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
