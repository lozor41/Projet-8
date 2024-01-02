import { useGet } from '../components/Api'
import Card from '../components/Card'
import Imghome from '../Image/Homekasa.png'
import Error from '../pages/Error'

const Home = () => {
    const { data, isLoading, error } = useGet()

    if (error) return <Error />

    return (
        <div id="homepage">
            <div id="banner">
                <h1 id="title">Chez vous, partout et ailleurs</h1>
                <img src={Imghome} alt="Plage Falaise" id="imgbanner"></img>
            </div>
            <div id="removecard">
                {isLoading ? (
                    <div>Chargement...</div>
                ) : (
                    data.map((item) => <Card key={item.id} data={item} />)
                )}
            </div>
        </div>
    )
}

export default Home
