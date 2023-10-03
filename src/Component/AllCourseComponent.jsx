import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

import ImageReact from '../img/ImageReact.png'


import '../css/AllCourse.css'

export default function AllCourse() {
    return (
        <>
            <div className="border-all"></div>
            <form className='d-flex input-group '>
                <input type='search' className='form-control' placeholder='Cari Course' aria-label='Search' />
                <MDBBtn rippleDuration={0} color='primary'>Search</MDBBtn>
            </form>
            <div className="all-detail">
                <MDBCard className='all-course'>
                    <MDBCardImage src={ImageReact} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='all-course'>
                    <MDBCardImage src={ImageReact} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='all-course'>
                    <MDBCardImage src={ImageReact} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='all-course'>
                    <MDBCardImage src={ImageReact} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='all-course'>
                    <MDBCardImage src={ImageReact} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='all-course'>
                    <MDBCardImage src={ImageReact} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </>
    )
}