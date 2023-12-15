import Cards  from "../components/Cards";
import Imghome from "../Image/Homekasa.png"

const Home = () => <div id="homepage">
    <div id="banner">
    <h1 id="title">Chez vous, partout et ailleurs</h1>
    <img src={Imghome} alt="Plage Falaise" id="imgbanner"></img>
    </div>
    <div id="removecard">
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    </div>
</div>


export default Home