import React, { useState } from 'react';
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
}
from 'mdb-react-ui-kit';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
	const response = await axios.post('/api/v1/register', {
	  name,
	  email,
	  password
	});

	if (response.status !== 200) {
	  alert('error register need some investigation');
	  return;
	}

	localStorage.setItem('token', response.data.token);

	axios.defaults.headers.common['Authorization'] = response.data.token;

	navigate('/');
  }

  return (
    <MDBContainer fluid className='register-page'>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput value={name} onChange={(e) => setName(e.target.value)} style={{borderRadius: '20px'}} placeholder='Your Name' id='form1' type='text' className='w-100'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} style={{borderRadius: '20px'}} placeholder='Your Email' id='form2' type='email'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} style={{borderRadius: '20px'}} placeholder='Password' id='form3' type='password'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput style={{borderRadius: '20px'}} placeholder='Repeat your password' id='form4' type='password'/>
              </div>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/Login" className="link-danger">Login</a></p>
              <MDBBtn className='mb-4' size='lg' onClick={register}>Register</MDBBtn>
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

export default Register;
