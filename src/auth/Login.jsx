import React, { useState } from 'react';
import Navbar from '../Component/NavbarComponent';
import Footer from '../Component/FooterComponent'

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
                    loading ? (<svg width="20" height="20" viewBox="0 2 13 14" fill='none' xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
                        stroke="white"
                        repeatDur
                      />
                    </svg>) : "Login"
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
