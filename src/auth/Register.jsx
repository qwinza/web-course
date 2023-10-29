import React, { useState } from 'react';
import '../css/Register.css';

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
}
  from 'mdb-react-ui-kit';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    setLoading(true)
    const response = await axios.post('/api/v1/register', {
      name,
      email,
      password
    });

    if (response.status !== 200) {
      alert('error register need some investigation');
      setLoading(false)
      return;
    }

    localStorage.setItem('token', response.data.token);

    navigate('/');
  }

  return (
    <MDBContainer fluid className='register-page'>

      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg' />
                <MDBInput value={name} onChange={(e) => setName(e.target.value)} style={{ borderRadius: '20px' }} placeholder='Your Name' id='form1' type='text' className='w-100' />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderRadius: '20px' }} placeholder='Your Email' id='form2' type='email' />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: '20px' }} placeholder='Password' id='form3' type='password' />
              </div>
              <p className="small fw-bold mt-2 pt-1 mb-2">have an account? <a href="/Login" className="link-danger">Login</a></p>
              <MDBBtn rippleDuration={0} className='mb-4' size='lg' onClick={register}>
                {
                  loading ? (<svg width="40" height="30" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
                      stroke="white"
                    />
                  </svg>) : "Register"
                }
              </MDBBtn>
            </MDBCol>
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;
