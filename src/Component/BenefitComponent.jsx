import ImageLearn from '../img/image-path.jpg'
import ImageCerti from '../img/image-serti.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";

import '../css/Benefit.css'



export default function Benefit (){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
            <div className="container" data-aos="fade-down-right">
                <div className="cards">
                    <div className="card-list">
                        <img src={ImageCerti} alt="..."   />
                        <h2>Sertifikat</h2>
                        <p>Bangun Portofolio mu dengan mendapatkan sertifikat bersama Estradax</p>
                    </div>
                    <div className="card-list">
                        <img src={ImageLearn} alt="..."   />
                        <h2>Learning Path</h2>
                        <p>Arahan belajar dari Estradax untuk kamu bisa menjadi seorang Web Dev</p>
                    </div>
                </div>
            </div>
        </>
    )
}