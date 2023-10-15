import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../css/Navbar.css'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
    MDBDropdownMenu,
} from 'mdb-react-ui-kit';

export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);
    const navigate = useNavigate()

    return (

        <MDBNavbar className='nav' expand='lg' color='primary' bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand style={{ color: 'black', marginRight: '5rem', fontSize: '3rem', fontFamily: "Times New Roman" }} href='/'>Est</MDBNavbarBrand>

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
                            <MDBNavbarLink active aria-current='page' href='#'>

                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBDropdown className='drop' style={{ fontSize: '25px', fontFamily: 'inherit' }}>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                    Product
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Front End Developer</MDBDropdownItem>
                                    <MDBDropdownItem link>Back End Developer</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink style={{ color: 'black', fontSize: '25px', fontFamily: 'inherit' }} href='/Contact'>Contact</MDBNavbarLink>
                        </MDBNavbarItem>

                    </MDBNavbarNav>

                    <form className='d-flex input-group '>
                        <input type='search' className='form-control' placeholder='Cari Course' aria-label='Search' />
                        <MDBBtn rippleDuration={0} style={{ marginRight: '3rem' }} color='primary'>Search</MDBBtn>
                    </form>
                    <div className='Login'>
                        <MDBBtn rippleDuration={0} color='primary' onClick={() => navigate('/Login')}>Login</MDBBtn>
                    </div>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
