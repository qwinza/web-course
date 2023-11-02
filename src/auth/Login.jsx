import React, { useState } from 'react';
import Navbar from '../Component/NavbarComponent';
import Footer from '../Component/FooterComponent';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';

import '../css/Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const login = async () => {
    let response;
    setLoading(true)
    try {
      response = await axios.post('/api/v1/login', {
        email,
        password
      });
    } catch {
      alert('error login');
      setLoading(false)
      return;
    }
    localStorage.setItem('token', response.data.token);
    navigate('/');
  }


  return (
    <>
      <Navbar />
      <MDBContainer className='body' fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto shadow' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">Please enter your login and password!</p>
                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4 w-100' placeholder='Email address' id='formControlLg' type='email' size="lg" />
                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4 w-100' placeholder='Password' id='formControlLg' type='password' size="lg" />
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                <MDBBtn rippleDuration={false} onClick={login} className="mb-0 px-5" size='lg'>
                  {
                    loading ?
                      (
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <CircularProgress />
                        </Box>
                      )
                      : "Login"
                  }
                </MDBBtn>
                <hr className="my-4" />
                <MDBBtn onClick={() => navigate('/register')} rippleDuration={false} className="mb-2 w-100" size="lg" style={{ backgroundColor: 'green' }}>
                  <MDBIcon fab className="mx-2" />
                  Sign Up
                </MDBBtn>
                <MDBBtn rippleDuration={false} className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                  <MDBIcon fab icon="google" className="mx-2" />
                  Sign in with google
                </MDBBtn>
                <MDBBtn rippleDuration={false} className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                  <MDBIcon fab icon="facebook-f" className="mx-2" />
                  Sign in with facebook
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  )
}


export default Login;
