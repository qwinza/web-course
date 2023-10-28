import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { MDBBtn } from "mdb-react-ui-kit";

import '../css/Course.css'

export default function Course() {

  var dataCourse = [
    {
      id: 1,
      title: 'React JS',
      desc: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Iusto alias quod a sed itaque quae provident error, laborum odit dolore minus'
    },
    {
      id: 2,
      title: 'React JS',
      desc: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Iusto alias quod a sed itaque quae provident error, laborum odit dolore minus'
    },
    {
      id: 3,
      title: 'React JS',
      desc: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Iusto alias quod a sed itaque quae provident error, laborum odit dolore minus'
    }

  ]

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
          {
            dataCourse.map((item, _index) => (
              <div key={_index} className="card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/landingCourse')}>Detail</MDBBtn>
              </div>
            ))
          }
        </Slider >
      </div>
    </>
  );
}
