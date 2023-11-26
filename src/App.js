import Navbar from './Component/NavbarComponent.jsx'
import Benefit from './Component/BenefitComponent'
import Course from './Course/CourseComponent';
import Testi from './Component/TestiComponent.jsx'
import Footer from './Component/FooterComponent'
import landingGif from './img/worldGif.gif'
import './css/App.css'


import { useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

function App() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div className='Head'>
        <div className="Container">
          <h1>Welcome To <span style={{ color: 'blue' }}>Estradax</span>
          </h1>
          <h3>Upgrade Your Skill!</h3>
          <p>Kembangkan skill dengan mengikuti alur pembelajaran
            bersama kami
          </p>
          <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/AllCourse')}>Detail Course</MDBBtn>
        </div>
        <div className="item">
          <img src={landingGif} alt="landing" />
        </div>
      </div>
      <div className='content'>
        <Benefit />
        <Course />
        <Testi />
        <Footer />
      </div>
    </>
  );
}

export default App;
