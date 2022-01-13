import React from 'react';
import '../Slider/Slider.css'
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'

export default function BtnSlider({direction, moveSlide, showModal}){

    return (
        <button
        className={direction === "next" ? 'btn-slide next': 'btn-slide prev'}
        onClick={moveSlide}
        style={{"display": showModal ? 'none' : undefined}}>
            <img src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    )
}
