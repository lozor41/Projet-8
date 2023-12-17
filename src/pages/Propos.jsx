import bannerimg from '../Image/proposimg.jpg'
import Collapse from '../components/Collapse'

const Home = () => (
    <div id="propos">
        <div>
            <img src={bannerimg} alt="Montagne" id="bannerpropos"></img>
        </div>
        <div id="collapse">
            <Collapse></Collapse>
        </div>
    </div>
)

export default Home
