import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/Pages/App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginComponent from './Pages/Login';
import AllCourse from './Pages/AllCourse';
import DetailCourseComponent from './Pages/DetailCourse'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />
  },

  {
    path: "/Login",
    element: <LoginComponent />,
  },
  {
    path: "/Detail",
    element: <DetailCourseComponent />
  },
  {
    path: "/AllCourse",
    element: <AllCourse />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
