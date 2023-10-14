import React, { useState } from 'react';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

export default function Login() {
    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    return (
        <>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                            Login
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                            Register
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>

                    <MDBTabsPane show={justifyActive === 'tab1'}>
                        <h2 style={{textAlign: 'center', marginBottom: '50px', marginTop: '20px'}}>Login</h2>
                        <MDBInput style={{borderRadius: '30px'}} wrapperClass='mb-4' placeholder='Email address' id='form1' type='email' />
                        <MDBInput style={{borderRadius: '30px'}} wrapperClass='mb-4' placeholder='Password' id='form2' type='password' />

                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="!#">Forgot password?</a>
                        </div>

                        <MDBBtn style={{borderRadius: '20px'}} rippleDuration={0} className="mb-4 w-100">Sign in</MDBBtn>

                    </MDBTabsPane>

                    <MDBTabsPane show={justifyActive === 'tab2'}>
                        <h2 style={{textAlign: 'center', marginTop: '20px', marginBottom:'50px'}}>Register</h2>
                        <MDBInput wrapperClass='mb-4' placeholder='Name' id='form1' type='text' />
                        <MDBInput wrapperClass='mb-4' placeholder='Username' id='form1' type='text' />
                        <MDBInput wrapperClass='mb-4' placeholder='Email' id='form1' type='email' />
                        <MDBInput wrapperClass='mb-4' placeholder='Password' id='form1' type='password' />

                        <div className='d-flex justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                        </div>

                        <MDBBtn style={{borderRadius: '20px'}} rippleDuration={0} className="mb-4 w-100">Sign up</MDBBtn>

                    </MDBTabsPane>

                </MDBTabsContent>

            </MDBContainer>
        </>
    )
}