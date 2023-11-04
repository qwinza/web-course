import React, { Component } from "react";
import imageProfile from '../img/profile-user.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"

import '../css/Testi.css'

export default class Testimonials extends Component {
    render() {
        return (
            <>
                <h2 className="text-center mb-5">Testimoni</h2>
                <Carousel
                    showArrows={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                    className="mt-5"
                >
                    <div>
                        <img src={imageProfile} alt="...." />
                        <div className="myCarousel">
                            <h3>Shirley Fultz</h3>
                            <h4>Designer</h4>
                            <p>
                                It's freeing to be able to catch up on customized news and not be
                                distracted by a social media element on the same site
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={imageProfile} alt="...." />
                        <div className="myCarousel">
                            <h3>Daniel Keystone</h3>
                            <h4>Designer</h4>
                            <p>
                                The simple and intuitive design makes it easy for me use. I highly
                                recommend Fetch to my peers.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={imageProfile} alt="...." />
                        <div className="myCarousel">
                            <h3>Theo Sorel</h3>
                            <h4>Designer</h4>
                            <p>
                                I enjoy catching up with Fetch on my laptop, or on my phone when
                                I'm on the go!
                            </p>
                        </div>
                    </div>
                </Carousel>
            </>
        );
    }
}