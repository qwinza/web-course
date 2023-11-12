import React, { useState } from 'react';
import Footer from '../Component/FooterComponent';
import Navbar from '../Component/NavbarComponent'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../css/Register.css';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBInput,

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
    <>
      <Navbar />
      <MDBContainer fluid className='d-flex align-items-center justify-content-center mb-5 mt-5 p-3'>
        <div className='mask gradient-custom-3'></div>
        <MDBCard style={{ maxWidth: '600px' }}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
            <MDBInput value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' placeholder='Your Name' size='lg' id='form1' type='text' />
            <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' placeholder='Your Email' size='lg' id='form2' type='email' />
            <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' placeholder='Password' size='lg' id='form3' type='password' />
            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
            </div>

            <MDBBtn rippleDuration={0} className='mb-4' size='lg w-100' onClick={register}>
              {
                loading ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircularProgress />
                  </Box>
                ) : "Register"
              }
            </MDBBtn>
            <p>Have An Account? <a href="/Login">Sign Up </a></p>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <Footer />
    </>
  );
}


export default Register;
