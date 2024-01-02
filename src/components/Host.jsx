import React from 'react'

function Host(props) {
    return (
        <>
            <span className="host-name">{props.name}</span>
            <img
                className="host-picture"
                src={props.picture}
                alt="Propriétaire"
            />
        </>
    )
}

export default Host
