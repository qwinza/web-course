import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { MDBBtn } from "mdb-react-ui-kit";

import '../css/Course.css'


export default function Course() {
  const navigate = useNavigate()
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
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

      <div className="card-course">
        <Slider {...settings}>
            <div className="card">
             
              <h3>Front End</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto alias quod a sed itaque quae provident error, laborum odit dolore minus</p>
              <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/Detail')}>Detail</MDBBtn>
            </div>
            <div className="card">
              
              <h3>Back End</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto alias quod a sed itaque quae provident error, laborum odit dolore minus</p>
              <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/Detail')}>Detail</MDBBtn>
            </div>
            <div className="card">
             
              <h3>React JS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto alias quod a sed itaque quae provident error, laborum odit dolore minus</p>
              <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/Detail')}>Detail</MDBBtn>
            </div>
        </Slider >
      </div>
    </>
  );
}
