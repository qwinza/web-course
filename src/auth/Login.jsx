import React, { useState } from 'react';


import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';


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
      <MDBContainer fluid className="p-3 my-5 h-custom">

        <MDBRow>

          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample" />
          </MDBCol>

          <MDBCol col='4' md='6'>

            <div className="divider d-flex align-items-center my-4">
              <h1>Login</h1>
            </div>
            <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderRadius: '20px' }} wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' size="lg" />
            <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: '20px' }} wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>

            <div className='text-center text-md-start mt-4 pt-2'>
              <MDBBtn rippleDuration={0} onClick={login} className="mb-0 px-5" size='lg'>
                {
                  loading ? (<svg width="20" height="20" viewBox="0 2 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
                      stroke="white"
                      repeatCount={true} 
                    />
                    
                  </svg>) : "Login"
                }
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/Register" className="link-danger">Register</a></p>
            </div>

          </MDBCol>

        </MDBRow>


      </MDBContainer>

    </>
  )
}

export default Login;
