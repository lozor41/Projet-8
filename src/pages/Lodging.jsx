import { useParams } from 'react-router'
import datalodging from '../logements.json'
import Error from './Error'
import Collapse from '../components/Collapse'
import Carrousel from '../components/Caroussel'
import Tags from '../components/tags'
import Rating from '../components/Rating'
import Host from '../components/Host'

const Logement = () => {
    const { id } = useParams()

    const ficheLogement = datalodging.find((logement) => logement.id === id)

    const tagsLogement = ficheLogement?.tags.map((tags, i) => {
        return <Tags key={i} nom={tags} />
    })

    const equipements = ficheLogement?.equipments.map((equipment, i) => {
        return (
            <ul key={i}>
                <li>{equipment}</li>
            </ul>
        )
    })

    return (
        <>
            {ficheLogement ? (
                <div className="Fiche-container">
                    <Carrousel slides={ficheLogement?.pictures} />
                    <section className="Fiche-logement">
                        <div className="description-info">
                            <div className="description-info__titletags">
                                <div className="description-info__titletags__title">
                                    <span className="titre-logement">
                                        {ficheLogement?.title}
                                    </span>
                                    <span className="endroit-logement">
                                        {ficheLogement?.location}
                                    </span>
                                </div>
                                <div className="description-info__titletags__tags">
                                    {tagsLogement}
                                </div>
                            </div>

                            <div className="description-info__proprietaire">
                                <div className="description-info__proprietaire__nom-prop">
                                    <Host
                                        name={ficheLogement?.host.name}
                                        picture={ficheLogement?.host.picture}
                                    />
                                </div>
                                <div className="description-info__proprietaire__rate">
                                    <Rating score={ficheLogement.rating} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="description-centent">
                        <div className="description-centent__description">
                            <Collapse
                                title="Description"
                                content={ficheLogement?.description}
                            />
                        </div>
                        <div className="description-centent__equipement">
                            <Collapse
                                title="Équipements"
                                content={equipements}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <Error replace to="/Error" />
            )}
        </>
    )
}

export default Logement
