import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import {
  CCard,
  CRow,
  CCardImage,
  CCardTitle,
  CCol,
  CCardBody,
  CListGroupItem,
  CListGroup,
} from "@coreui/react";
import { CBadge } from "@coreui/react";
import ReactImg from "../img/img-react.png";

import Navbar from "../Component/NavbarComponent";
import Footer from "../Component/FooterComponent";

import { useNavigate } from "react-router-dom";

const AllCourseComponent = () => {
  const baseURL = "https://course-serv-api-service.onrender.com/api/v1/courses";

  const [course, setCourse] = useState([]);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const getData = async () => {
    let response;
    try {
      response = await axios.get(baseURL);
      setCourse(response.data.Courses);
    } catch {
      console.log("No data");
      return;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <section className=" mt-5 container">
        <div className="justify-content-center">
          <div className="mb-5">
            <div className="mb-3 col-4 mx-auto text-center">
              <label className="form-lable h4">Search</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="allcourse-content">
            <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
              {course
                ?.filter((course) => {
                  return search.toLowerCase() === ""
                    ? course
                    : course.Title.toLowerCase().includes(search);
                })
                .map((data, index) => (
                  <CCol key={index}>
                    <CCard className="h-100">
                      <CCardImage orientation="top" src={ReactImg} />
                      <CCardBody>
                        <CCardTitle>{data.Title}</CCardTitle>
                        <CListGroup flush>
                          <CListGroupItem>Modul : 10</CListGroupItem>
                          <CListGroupItem>
                            <CBadge color="danger">Locked</CBadge>
                          </CListGroupItem>
                          <CListGroupItem>Price : {data.Price}</CListGroupItem>
                          <MDBBtn
                            className="mt-3 w-100"
                            rippleDuration={false}
                            onClick={() => navigate("/landingCourse")}
                          >
                            BUY
                          </MDBBtn>
                        </CListGroup>
                      </CCardBody>
                    </CCard>
                  </CCol>
                ))}
            </CRow>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllCourseComponent;
