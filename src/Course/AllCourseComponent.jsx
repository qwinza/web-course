import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from '../Component/NavbarComponent'
import Footer from '../Component/FooterComponent'

import data from './DataCourse'

const AllCourseComponent = () => {

    const [filter, setFilter] = useState('')

    const searchText = (event) => {
        setFilter(event.target.value);
    }

    let dataSearch = data.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });
    return (
        <>
            <Navbar />
            <section className='py-4 container'>
                <div className="row justify-content-center">

                    <div className="col-12 mb5">
                        <div className="mb-3 col-4 mx-auto text-center">
                            <label className='form-lable h4'>Search</label>
                            <input type="text"
                                className="form-control"
                                value={filter}
                                onChange={searchText.bind(this)}
                            />
                        </div>
                    </div>

                    {dataSearch.map((item, index) => (
                        <div className="col-11 cold-md-6 col-lg-3 mx-0 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <img src={item.img} alt="" className='card-img-top' />
                                <div className="card-body">
                                    <h5 className='card-title'>{item.title}</h5>
                                    <p className='card-text'>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default AllCourseComponent
