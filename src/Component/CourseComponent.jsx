import React, { Component } from "react";
import Slider from "react-slick";
import ImageFront from '../img/FrontEndImage.png'
import ImageBack from '../img/backendImage.jpeg'
import ImageVue from '../img/ImageVue.png'
import ImageNext from '../img/ImageNext.png'
import ImageReact from '../img/ImageReact.png'
import ImageNest from '../img/ImageNest.png'

import '../css/Course.css'


export default class Course extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <div className="content">
                    <div className="course-content">
                        <Slider {...settings}>
                            <div className="card">
                                <img src={ImageFront} alt="..." />
                                <h3>Front End</h3>
                            </div>
                            <div className="card">
                                <img src={ImageBack}  alt="..." />
                                <h3>Back End</h3>
                            </div>
                            <div className="card">
                                <img src={ImageReact}  alt="..." />
                                <h3>React JS</h3>
                            </div>
                            <div className="card">
                                <img src={ImageNext}  alt="..." />
                                <h3>Next JS</h3>
                            </div>
                            <div className="card">
                                <img src={ImageNest}  alt="..." />
                                <h3>Nest JS</h3>
                            </div>
                            <div className="card">
                                <img src={ImageVue}  alt="..." />
                                <h3>Vue JS</h3>
                            </div>
                        </Slider >
                    </div>
                </div >
            </>
        );
    }
}