import React from 'react'

function Tags(props) {
    return (
        <>
            <div className="tag">
                <p className="tag__text">{props.tags}</p>
            </div>
        </>
    )
}

export default Tags
