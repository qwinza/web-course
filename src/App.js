import Navbar from './Component/NavbarComponent.jsx'
import Benefit from './Component/BenefitComponent'
import Course from './Course/CourseComponent'
import Footer from './Component/FooterComponent'
import landingImage from './img/landing-image.png'
import './css/App.css'
                        

import { useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

function App() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div className='Head'>
        <div className='border1'></div>
        <div className="Container">
          <h1>Welcome To <span style={{color: 'blue'}}>Estradax</span>
            </h1>
          <h3>Upgrade Your Skill!</h3>
          <p>Kembangkan skill dengan mengikuti alur pembelajaran
            bersama kami
          </p>
          <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/AllCourse')}>Detail Course</MDBBtn>
        </div>
        <div className="item">
          <img src={landingImage} alt="landing" />
        </div>
      </div>
      <Benefit />
      <Course />
      <Footer />
    </>
  );
}

export default App;
