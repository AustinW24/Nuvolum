import React, { useState } from 'react';
import Header from '../Header';
import Modal from '../context/Modal';
import data from './slider-data.json';
import BtnSlider from '../BtnSlider';
import SliderModal from '../SliderModal'
import './Slider.css';



export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1); //this will keep track of which obj in map were referring to when clicked
    const [showModal, setShowModal] = useState(false) //keeps track using a boolean value that is flipped to true if the user clicks on a slide


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
    const handleModal = (obj) => {
        setShowModal(!showModal)
    }


    return (
        <>
            <body style={{ backgroundColor: showModal ? 'rgba(0,0,0,0.8)' : '' }}>
                <Header />
                <div className="container-slider">
                    {data.map((obj, index) => {
                        return (
                            <div
                                key={obj.id}
                                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                                <img
                                    onClick={() =>  setShowModal(true)}
                                    src={process.env.PUBLIC_URL + require(`../Slider/imgs/${index + 1}.jpg`)}
                                    alt={obj.alt}
                                    style={{"display": showModal ? 'none' : undefined}}/>
                                {showModal && ( //if picture is clicked(showModal) then execute this block of code
                                    <Modal>
                                        <SliderModal obj={obj} setShowModal={setShowModal} showModal={showModal} data={data} />
                                    </Modal>//wanted to pass the slider functions as props so its not repetitive but ran into bugs
                                )}
                            </div>
                        )
                    })}
                    <BtnSlider moveSlide={nextSlide} direction={"next"} style={{"display": showModal ? 'none' : undefined}}/>
                    <BtnSlider moveSlide={prevSlide} direction={"prev"} style={{"display": showModal ? 'none' : undefined}}/>
                    <div className="container-dots" style={{"display": showModal ? 'none' : undefined}}>
                        {Array.from({ length: data.length }).map((item, index) => ( //create array with length === # of slides for each dot to represent slide
                            <div
                                key={index}
                                onClick={() => moveDot(index + 1)}
                                className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                        ))}
                    </div>
                </div>
            </body>
        </>
    )
}
