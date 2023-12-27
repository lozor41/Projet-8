import bannerimg from '../Image/proposimg.jpg'
import Collapse from '../components/Collapse'
import CollapseData from '../datas/collapse.json'

const About = () => (
    <div id="propos">
        <div id="banner">
            <img src={bannerimg} alt="Montagne" id="bannerpropos"></img>
        </div>
        <div id="collapse">
            <div id="collapse__dropdown">
                {CollapseData.map((item) => {
                    return (
                        <div key={item.id}>
                            <Collapse
                                content={item.content}
                                title={item.title}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
)

export default About
