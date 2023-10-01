import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/Landing.css'

import landingImage from '../img/image-landing.avif'

export default function Landing() {
    return (
        <>
            <div className="Head">
                <h1>Welcome To Estradax</h1>
                <h3>Upgrade Your Skill!</h3>
                <p>Kembangkan Website dengan mengikuti alur pembelajar
                    bersama kami
                </p>
                <div className="item">
                    <img src={landingImage} alt="landing" />
                </div>
            </div>
        </>
    )
}