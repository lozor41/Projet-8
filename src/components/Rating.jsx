import React from 'react'
import redstar from '../Image/redstar.svg'
import greystar from '../Image/greystar.svg'

const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5]

    return (
        <div className="rating">
            {stars.map((item, index) => (
                <img
                    className="rating_icon"
                    key={`star-${index}`}
                    src={index <= rating - 1 ? redstar : greystar}
                    alt={`star n°${index + 1}`}
                />
            ))}
        </div>
    )
}

export default Rating
