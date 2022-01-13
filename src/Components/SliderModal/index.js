import React, { useState } from 'react';
import BtnSlider from '../BtnSlider';
import './SliderModal.css';

export default function SliderModal({ setShowModal, data }) {
    const [slideIndex, setSlideIndex] = useState(1); //this will keep track of which obj in map were referring to when clicked

    const nextSlide = () => {
        if (slideIndex !== data.length) { //if were not at the end of our slides, we just want to go on to the next
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === data.length) { //if were are at the end, we set the index back to the position of the first picture
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if (slideIndex !== 1) { //same logic as nextSlide but in reverse, decrement index down unless were at the first slide
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(data.length) //else set index to the position of last slide
        }
    }
    const moveDot = index => {
        setSlideIndex(index) //on dot click, set current index to position in array
    }

    return (


        <div className="slider-modal">
            {data.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <button onClick={() => setShowModal(false)} >X</button>
                        <img
                            src={process.env.PUBLIC_URL + require(`../Slider/imgs/${index + 1}.jpg`)}
                            alt={obj.alt} />
                    </div>
                )
            }
            )}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            <div className="container-dots">
                {Array.from({ length: data.length }).map((item, index) => ( //create array with length === # of slides for each dot to represent slide
                    <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}>
                    </div>
                ))}
            </div>
        </div>
    )
}
