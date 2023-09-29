import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/Landing.css'

import landingImage from '../img/image-landing.avif'

export default function Landing() {
    const navigate = useNavigate()
    return (
        <>
            <div className="container">
                <div className="item">
                    <h1>Welcome To Estradax</h1>
                    <h3>Upgrade Your Skill!</h3>
                    <p>Kembangkan Website dengan mengikuti alur pembelajar
                        bersama kami
                    </p>
                    <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/')}>Detail Course</MDBBtn>
                    <img src={landingImage} alt="landing" />
                </div>
            </div>
        </>
    )
}