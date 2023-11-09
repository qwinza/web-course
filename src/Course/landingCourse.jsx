import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';

import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from '@mui/material';


import {
    CBadge,
    CProgress
} from '@coreui/react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import '../css/landingCourse.css'

export default function landingCourse() {
    const steps = [
        'CSS',
        'Javascript',
        'Create Website',
    ];
    return (
        <>
            <MDBNavbar className='nav-landing'>
                <MDBContainer fluid>
                    <MDBNavbarBrand tag="span" className='mb-0 h1 text-white'>
                        <a href="/allCourse">
                            <ArrowBackIcon />
                        </a>
                        Title Course
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>

            <div className="cards p-5">
                <MDBCard className='p-2'>
                    <MDBCardBody>
                        <MDBCardTitle>Your Progress</MDBCardTitle>
                        <CProgress value={25}>25%</CProgress>
                        <MDBCardTitle className='mt-4'>HTML</MDBCardTitle>
                        <MDBCardText>
                            Hypertext Markup Language adalah bahasa markah standar untuk dokumen yang dirancang untuk <br /> ditampilkan di peramban internet. Ini dapat dibantu oleh teknologi
                            seperti Cascading Style Sheets dan bahasa skrip lainnya <br />
                            seperti JavaScript, VBScript, dan PHP.
                        </MDBCardText>
                        <MDBCardTitle>Next Step :</MDBCardTitle>
                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={0} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='p-5'>
                    <MDBCardBody>
                        <MDBCardTitle>Course Title :</MDBCardTitle>
                        <MDBCardText>
                            HTML
                        </MDBCardText>
                        <MDBCardTitle>Access :</MDBCardTitle>
                        <CBadge color="success">Success</CBadge>
                    </MDBCardBody>
                    <MDBBtn>Learn</MDBBtn>
                </MDBCard>
            </div>
            <div className='p-4'>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Mareri yang akan dipelajari</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Mareri yang akan dipelajari</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
}