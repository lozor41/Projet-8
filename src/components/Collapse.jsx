import React from 'react'
import { useState } from 'react'
import Arrow_up from '../Image/arrow_up.png'
import Arrow_down from '../Image/arrow_down.png'

const Collapse = (props) => {
    const [openTab, setOpenTab] = useState(false)

    const openTabHandler = () => {
        setOpenTab((openTab) => !openTab)
    }

    return (
        <>
            <div onClick={openTabHandler} className="collapse_header">
                <h2 className="collapse_header_title">{props.title}</h2>
                {!openTab ? (
                    <div id="arrow_down">
                        <img src={Arrow_down} alt="arrow down"></img>
                    </div>
                ) : (
                    <div id="arrow_up">
                        <img src={Arrow_up} alt="arrow up"></img>
                    </div>
                )}
            </div>
            {openTab && <div className="collapse_content">{props.content}</div>}
        </>
    )
}

export default Collapse
