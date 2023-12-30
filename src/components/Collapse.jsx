import React from 'react'
import { useState } from 'react'

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
                    <div id="arrow">
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                ) : (
                    <div>
                        <i class="fa-solid fa-angle-up"></i>
                    </div>
                )}
            </div>
            {openTab && <div className="collapse_content">{props.content}</div>}
        </>
    )
}

export default Collapse
