import ImageLearn from '../img/image-path.jpg'
import ImageCerti from '../img/image-serti.jpg'

import '../css/Benefit.css'



export default function Benefit (){
    return(
        <>
            <div className="container">
                <div className="cards">
                    <div className="card-list">
                        <img src={ImageCerti} alt="..." style={{width: '100px'}}/>
                        <h2>Sertifikat</h2>
                        <p>Bangun Portofolio mu dengan mendapatkan sertifikat bersama Estradax</p>
                    </div>
                    <div className="card-list">
                        <img src={ImageLearn} alt="..." style={{width: '120px'}} />
                        <h2>Learning Path</h2>
                        <p>Arahan belajar dari Estradax untuk kamu bisa menjadi seorang Web Dev</p>
                    </div>
                </div>
            </div>
        </>
    )
}