import { useParams } from 'react-router'
import Error from './Error'
import Collapse from '../components/Collapse'
import Carrousel from '../components/Caroussel'
import Tags from '../components/Tags'
import Rating from '../components/Rating'
import Host from '../components/Host'
import { useGetById } from '../components/Api'

const Logement = () => {
    const { id } = useParams()

    const { data, isLoading, error } = useGetById(id)

    if (error) {
        return <Error />
    }

    return isLoading ? (
        <div>Chargement...</div>
    ) : data ? (
        <div className="Fiche-container">
            <Carrousel slides={data?.pictures} />
            <section className="Fiche-logement">
                <div className="description-info">
                    <div className="description-info__titletags">
                        <div className="description-info__titletags__title">
                            <span className="titre-logement">
                                {data?.title}
                            </span>
                            <span className="endroit-logement">
                                {data?.location}
                            </span>
                        </div>
                        <div className="description-info__titletags__tags">
                            <Tags tags={data.tags} />
                        </div>
                    </div>

                    <div className="description-info__proprietaire">
                        <div className="description-info__proprietaire__nom-prop">
                            <Host
                                name={data?.host.name}
                                picture={data?.host.picture}
                            />
                        </div>
                        <div className="description-info__proprietaire__rate">
                            <Rating rating={data.rating} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="description-centent">
                <div className="description-centent__description">
                    <Collapse title="Description" content={data?.description} />
                </div>
                <div className="description-centent__equipement">
                    <Collapse
                        title="Équipements"
                        content={data.equipments.map((equipment, i) => (
                            <ul key={i}>
                                <li>• {equipment}</li>
                            </ul>
                        ))}
                    />
                </div>
            </div>
        </div>
    ) : (
        <Error />
    )
}

export default Logement
