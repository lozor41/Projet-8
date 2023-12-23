import React from 'react'
import bannerimg from '../Image/proposimg.jpg'
import Collapse from '../components/Collapse'
import CollapseData from '../datas/collapse.json'

const Propos = () => (
    <div id="propos">
        <div>
            <img src={bannerimg} alt="Montagne" id="bannerpropos"></img>
        </div>
        <div className="collapse">
            <div className="collapse__dropdown">
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

export default Propos
