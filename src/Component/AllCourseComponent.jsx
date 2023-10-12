import '../css/AllCourse.css'
import Footer from '../Pages/Footer'


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MDBBtn } from 'mdb-react-ui-kit';
import ImageReact from '../img/ImageReact.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
import { useNavigate } from 'react-router-dom';


export default function AllCourse() {
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
            <form className='d-flex input-group-course'>
                <input type='search' className='form-control' placeholder='Cari Course' aria-label='Search' />
                <MDBBtn rippleDuration={0} color='primary'>Search</MDBBtn>
            </form>
         <div className="cards-allcourse"
          data-aos="fade-down-right"
          style={{marginBottom: '100px'}}
          >
            <Card style={{ width: '18rem' }}>
                <Card.Img className='img-course' variant="top" src={ImageReact} />
                <Card.Body>
                    <Card.Title>Course Name</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the Course Name and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate("/Detail")}>Detail</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img className='img-course' variant="top" src={ImageReact} />
                <Card.Body>
                    <Card.Title>Course Name</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the Course Name and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate("/Detail")}>Detail</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img className='img-course' variant="top" src={ImageReact} />
                <Card.Body>
                    <Card.Title>Course Name</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the Course Name and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate("/Detail")}>Detail</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img className='img-course' variant="top" src={ImageReact} />
                <Card.Body>
                    <Card.Title>Course Name</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the Course Name and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate("/Detail")}>Detail</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img className='img-course' variant="top" src={ImageReact} />
                <Card.Body>
                    <Card.Title>Course Name</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the Course Name and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate("/Detail")}>Detail</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img className='img-course' variant="top" src={ImageReact} />
                <Card.Body>
                    <Card.Title>Course Name</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the Course Name and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate("/Detail")}>Detail</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img className='img-course' variant="top" src={ImageReact} />
                <Card.Body>
                    <Card.Title>Course Name</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the Course Name and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate("/Detail")}>Detail</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img className='img-course' variant="top" src={ImageReact} />
                <Card.Body>
                    <Card.Title>Course Name</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the Course Name and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate("/Detail")}>Detail</Button>
                </Card.Body>
            </Card>
         </div>
         <Footer />
        </>
    )
}