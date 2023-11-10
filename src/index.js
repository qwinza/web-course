import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import ContactComponent from './Component/ContactComponent'
import LoginComponent from './auth/Login';
import Register from './auth/Register';
import AllCourse from './Course/AllCourseComponent';
import LandingCourse from './Course/landingCourse';
import ForumComponent from './Component/ForumComponent'
import DetailCourseComponent from './Course/DetailCourseComponent'
import axios from 'axios';
import Profile from './profile/profile';
import ProfileSetting from './profile/profileSetting'
import Setting from './Component/Setting'

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
	config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

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
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Contact",
    element: <ContactComponent />,
  },
  {
    path: "/LandingCourse",
    element: <LandingCourse />
  },
  {
    path: "/Forum",
    element: <ForumComponent />
  },
  {
    path: "/Detail",
    element: <DetailCourseComponent />
  },
  {
    path: "/AllCourse",
    element: <AllCourse />
  },
  {
    path: "/profileSetting",
    element: <ProfileSetting />
  },
  {
    path: "/Setting",
    element: <Setting />
  },
  {
	path: "/Profile",
	loader: async () => {
	  let response;

	  try {
		response = await axios.get('/api/v1/profile');
	  } catch {
		return redirect('/Login');
	  }

	  return response.data;
	},
	element: <Profile /> 
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
