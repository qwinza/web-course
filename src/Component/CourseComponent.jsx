
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactImg from '../img/ImageReact.png'
import VueImg from '../img/ImageVue.png'
import NextImg from '../img/ImageNext.png'

import '../css/Course.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
import { useNavigate } from 'react-router-dom';


function BasicExample() {
  useEffect(() => {
        AOS.init();
      }, [])
  const navigate = useNavigate()
  return (
    <div className='card-course' data-aos="fade-down-right">
    <Card style={{ width: '18rem' }}>
      <Card.Img className='img-course' variant="top" src={ReactImg} />
      <Card.Body>
        <Card.Title>Course Name</Card.Title>
        <Card.Text>
          Some quick example text to build on the Course Name and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => navigate('/Detail')}>Detail</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img className='img-course' variant="top" src={VueImg} />
    <Card.Body>
      <Card.Title>Course Name</Card.Title>
      <Card.Text>
        Some quick example text to build on the Course Name and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Detail</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img className='img-course' variant="top" src={NextImg} />
    <Card.Body>
      <Card.Title>Course Name</Card.Title>
      <Card.Text>
        Some quick example text to build on the Course Name and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Detail</Button>
    </Card.Body>
  </Card>
  
  </div>
  );
}

export default BasicExample;