import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import ImageReact from '../img/ImageReact.png'
import { MDBBtn } from "mdb-react-ui-kit";

import '../css/Course.css'


export default function Course() {
    const navigate = useNavigate()
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
            <div className="fancy-border"></div>
            <div className="content">
                <div className="course-content">
                    <Slider {...settings}>
                        <div className="card">
                            <img src={ImageReact} alt="..." />
                            <h3>Front End</h3>
                            <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/Detail')}>Free</MDBBtn>
                        </div>
                        <div className="card">
                            <img src={ImageReact} alt="..." />
                            <h3>Back End</h3>
                            <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/Detail')}>Free</MDBBtn>
                        </div>
                        <div className="card">
                            <img src={ImageReact} alt="..." />
                            <h3>React JS</h3>
                            <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/Detail')}>Free</MDBBtn>
                        </div>
                        <div className="card">
                            <img src={ImageReact} alt="..." />
                            <h3>Next JS</h3>
                            <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/Detail')}>Free</MDBBtn>
                        </div>
                        <div className="card">
                            <img src={ImageReact} alt="..." />
                            <h3>Nest JS</h3>
                            <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/Detail')}>Free</MDBBtn>
                        </div>
                        <div className="card">
                            <img src={ImageReact} alt="..." />
                            <h3>Vue JS</h3>
                            <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/Detail')}>Free</MDBBtn>
                        </div>
                    </Slider >
                </div>
            </div >
        </>
    );
}
