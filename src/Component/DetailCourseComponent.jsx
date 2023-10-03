
import ImageReact from '../img/ImageReact.png';
import { Col, Container, Image, Row, ListGroup, Badge } from "react-bootstrap";
import '../css/DetailCourse.css'

const Course = () => {

  return (
    <Container fluid className="course-detail-container">
      <Row className="p-4">
	<h1 className="text-black">React JS</h1>
      </Row>
      <Row>
	<Col className="d-flex justify-content-center pt-4">
	  <Image src={ImageReact} alt="" width={300} height={300} />
	</Col>
	<Col className="pt-4">
          <p className="text-black">
            Mengasah kemampuan untuk menjadikan kamu bisa
            <br />
            memvisualisasikan desain ke dalam barisan kode dan mengasah <br />
            logika kamu dalam mengembangkan sebuah website
            <br />
            sehingga kamu bisa menjadi Web Developer.
          </p>
	</Col>
      </Row>
      <Row className="p-4">
	<h2 className="text-black mb-4">Silabus</h2>
	<ListGroup as="ol" numbered>
	  <ListGroup.Item
	    as="li"
	    className="d-flex justify-content-between align-items-start"
	  >
	    <div className="ms-2 me-auto">
	      <div className="fw-bold">Subheading</div>
	      Cras justo odio
	    </div>
	    <Badge bg="primary" pill>
	      14
	    </Badge>
	  </ListGroup.Item>
	  <ListGroup.Item
	    as="li"
	    className="d-flex justify-content-between align-items-start"
	  >
	    <div className="ms-2 me-auto">
	      <div className="fw-bold">Subheading</div>
	      Cras justo odio
	    </div>
	    <Badge bg="primary" pill>
	      14
	    </Badge>
	  </ListGroup.Item>
	  <ListGroup.Item
	    as="li"
	    className="d-flex justify-content-between align-items-start"
	  >
	    <div className="ms-2 me-auto">
	      <div className="fw-bold">Subheading</div>
	      Cras justo odio
	    </div>
	    <Badge bg="primary" pill>
	      14
	    </Badge>
	  </ListGroup.Item>
	</ListGroup>	
      </Row>
    </Container> 
  );
}

export default Course