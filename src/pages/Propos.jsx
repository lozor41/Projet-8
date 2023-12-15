import bannerimg from '../Image/proposimg.jpg'
import Menufiabilité from '../components/Dropdown'

const Home = () => 
<div id='propos'>
    <img src={bannerimg} alt='Montagne' id='bannerpropos'></img>
    <div>
        <Menufiabilité></Menufiabilité>
    </div>
    </div>

export default Home