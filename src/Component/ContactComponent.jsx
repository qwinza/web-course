import React from 'react';
import '../css/Register.css'

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBTextArea
}
from 'mdb-react-ui-kit';


const Contact = () => {
  return (
    <MDBContainer fluid className='register-page'>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h2 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{marginBottom: '50px'}}>Contact Us</h2>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput style={{borderRadius: '20px'}} placeholder='Your Name' id='form1' type='text' className='w-100'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput style={{borderRadius: '20px'}} placeholder='Your Email' id='form2' type='email'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBTextArea placeholder='Text Message' style={{height: '20rem', width: '25rem'}} />
              </div>
              
              <MDBBtn className='mb-4' size='lg'>Send</MDBBtn>
            </MDBCol>
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Contact;