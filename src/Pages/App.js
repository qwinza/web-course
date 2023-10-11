import Navbar from '../Pages/Navbar'
import Benefit from '../Pages/Benefit'
import Course from '../Pages/Course'
import Footer from '../Pages/Footer'
import landingImage from '../img/image-landing.avif'
import '../css/App.css'
                        

import { useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

function App() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div className='Head'>
        <div className='border'></div>
        <div className="Container">
          <h1>Welcome To <span style={{color: 'blue'}}>Estradax</span>
            </h1>
          <h3>Upgrade Your Skill!</h3>
          <p>Kembangkan Website dengan mengikuti alur pembelajaran
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
