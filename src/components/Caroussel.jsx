import React, { useState } from 'react'
import Arrow_left from '../Image/arrow_left.png'
import Arrow_right from '../Image/arrow_right.png'

function Carrousel({ slides }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
    return (
        <section className="slide">
            {length > 1 && (
                <p className="left-Arrow" onClick={prevImage}>
                    <img src={Arrow_left} alt="arrow left"></img>
                </p>
            )}
            {length > 1 && (
                <p className="right-Arrow" onClick={nextImage}>
                    <img src={Arrow_right} alt="arrow right"></img>
                </p>
            )}
            {slides.map((image, index) => {
                return (
                    <div
                        key={index}
                        className={
                            index === current ? 'slider active' : 'slider'
                        }
                    >
                        {index === current && (
                            <img
                                src={image}
                                alt="img-appartement"
                                className="slide__image"
                            />
                        )}
                        {index === current && length > 1 && (
                            <span className="slider__number">
                                {current + 1}/{length}
                            </span>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default Carrousel
