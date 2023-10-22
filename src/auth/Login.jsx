import React, { useState } from 'react';

import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';


import '../css/Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
	let response;
	try {
	  response = await axios.post('/api/v1/login', {
		email,
		password
	  });
	} catch {
	  alert('error login');
	  return;
	}

	localStorage.setItem('token', response.data.token);

	navigate('/');
  }

    return(
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

    <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} style={{borderRadius: '20px'}} wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' size="lg"/>
    <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} style={{borderRadius: '20px'}} wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg"/>

    <div className="d-flex justify-content-between mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <div className='text-center text-md-start mt-4 pt-2'>
      <MDBBtn onClick={login} className="mb-0 px-5" size='lg'>Login</MDBBtn>
      <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/Register" className="link-danger">Register</a></p>
    </div>

  </MDBCol>

</MDBRow>


</MDBContainer>

        </>
    )
}

export default Login;
