import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../css/Navbar.css'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);
    const [userProfile, setUserProfile] = useState([])
    const [IsLoggedIn, setIsLoggedIn] = useState()

    const navigate = useNavigate()

    const fetchProfile = () => {
        fetch("https://course-serv-api-service.onrender.com/api/v1/profile", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        })
            .then(response => {
                setIsLoggedIn(true)
                return response.json();
            }).then(data => {
                setUserProfile(data)
            }).catch(() => {
                setIsLoggedIn(false)
            })
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    const IsLogOut = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('token')
    }


    return (
        <>
            <div className="head-nav sticky-top">
                <MDBNavbar className='nav' expand='lg' color='primary'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand style={{ color: 'white', marginRight: '5rem', fontSize: '3rem', fontFamily: "Times New Roman" }} href='/'>Est</MDBNavbarBrand>

                        <MDBNavbarToggler
                            className='toggler'
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            color='light'
                            onClick={() => setShowBasic(!showBasic)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>

                        <MDBCollapse navbar show={showBasic}>
                            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                                <MDBNavbarItem>
                                    <MDBNavbarLink active aria-current='page' href='/'>

                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink style={{ color: 'white', fontSize: '25px', fontFamily: 'inherit' }} href='/Contact'>Program</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink style={{ color: 'white', fontSize: '25px', fontFamily: 'inherit' }} href='/Contact'>Contact</MDBNavbarLink>
                                </MDBNavbarItem>

                            </MDBNavbarNav>

                            <form className='d-flex input-group '>
                                <input type='search' className='form-control' placeholder='Apa yang ingin anda cari' aria-label='Search' />
                                <MDBBtn rippleDuration={0} style={{ marginRight: '3rem' }} color='primary'>Search</MDBBtn>
                            </form>
                            {
                                IsLoggedIn ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                        </svg>
                                        <NavDropdown title={userProfile.name}>
                                            <LinkContainer to='/profileSetting'>
                                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                            </LinkContainer>
                                            <NavDropdown.Item
                                                onClick={IsLogOut}
                                            >Log Out</NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                ) : (
                                    <div className="Login">
                                        <MDBBtn rippleDuration={0} color='primary'
                                            onClick={() => navigate('/Login')}
                                        >Login</MDBBtn>
                                    </div>
                                )
                            }
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </div>
        </>
    );
}
