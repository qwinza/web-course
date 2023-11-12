import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactImg from '../img/img-react.png'
import axios from 'axios';
import {
  CCard,
  CCardImage,
  CCardTitle,
  CCardText,
  CAccordion,
  CRow,
  CCol,
  CCardFooter,
  CCardBody,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody
} from '@coreui/react';

import '../css/Course.css'

export default function Course() {

  const recommendURL = "https://course-serv-api-service.onrender.com/api/v1/recommended";

  const [recomended, setRecomended] = useState()

  useEffect(() => {
    
  const fetchRecommended = async () => {
    let response;
    try{
      response = await axios.get(recommendURL);
      setRecomended(response.data)
    }catch{
      console.log("Gaada bang")
    }
  }
    fetchRecommended()
  }, [])

  useEffect(() => {
    AOS.init();
  }, [])


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
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
      <div className="card-course mb-5">
        <h2 className='title-course mb-4' data-aos="fade-down">Basic To Learn</h2>
        <Slider {...settings}>
          {
            recomended?.courses.map((item, index) => (
              <CRow key={index}>
                <CCol xs>
                  <CCard className="h-100 g-4">
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>{recomended.courses[index].Title}</CCardTitle>
                      <CCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, tenetur.</CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <CAccordion flush>
                        <CAccordionItem itemKey={1}>
                          <CAccordionHeader>Detail</CAccordionHeader>
                          <CAccordionBody>
                            {recomended.courses[index].Description}
                          </CAccordionBody>
                        </CAccordionItem>
                      </CAccordion>
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
            ))
          }
        </Slider >
      </div>


    </>
  );
}
