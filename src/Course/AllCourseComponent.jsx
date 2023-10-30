import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBBtn } from "mdb-react-ui-kit";
import ImgReact from '../img/ImageReact.png'

import Navbar from '../Component/NavbarComponent'
import Footer from '../Component/FooterComponent'

import { useNavigate } from 'react-router-dom';

const AllCourseComponent = () => {

    const [course, setCourse] = useState([])
    const navigate = useNavigate();

    const [search, setSearch] = useState('')
    console.log(search)

    const fetchCourse = () => {
        fetch("https://course-serv-api-service.onrender.com/api/v1/courses")
            .then(response => {
                return response.json()
            }).then(data => {

                setCourse(data.Courses)
            })
    }

    useEffect(() => {
        fetchCourse()
    }, [])

    return (
        <>
            <Navbar />
            <section className='py-4 mt-5 container'>
                <div className="row justify-content-center">
                    <div className="col-12 mb5">
                        <div className="mb-3 col-4 mx-auto text-center">
                            <label className='form-lable h4'>Search</label>
                            <input type="text"
                                className="form-control"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    {
                        course.filter((data) => {
                            return search.toLowerCase() === ''
                                ? data : data.Title.toLowerCase().includes(search)
                        }).map((data, index) => (
                            <div key={index} className="content col-11 cold-md-6 col-lg-3 mx-0 mb-4">
                                <div className="card p-0 overflow-hidden h-100 shadow p-4">
                                    <img src={ImgReact} alt="" className='card-img-top h-50' />
                                    <div className="card-body">
                                        <h5 className='card-title'>{data.Title}</h5>
                                        <p className='card-modul'>Modul : 10</p>
                                        <h5 className='price'>Price :</h5>
                                        <p className='card-text  border rounded w-auto'>{data.Price}</p>
                                        <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/landingCourse')}>Detail</MDBBtn>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>

            <Footer />
        </>
    )
}

export default AllCourseComponent
