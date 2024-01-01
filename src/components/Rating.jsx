import React from 'react'
import redstar from '../Image/redstar.svg'
import greystar from '../Image/greystar.svg'

const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5]

    return (
        <div className="rating">
            {stars.map((star) =>
                rating >= star ? (
                    <img
                        key={star.toString()}
                        className="rating__icon"
                        src={redstar}
                        alt="etoile rouge"
                    />
                ) : (
                    <img
                        key={star.toString()}
                        className="rating__icon"
                        src={greystar}
                        alt="etoile grise"
                    />
                ),
            )}
        </div>
    )
}

export default Rating
