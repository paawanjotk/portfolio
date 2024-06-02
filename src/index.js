import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import ExtendedNavbar from './components/ExtendedNavbar';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <><ExtendedNavbar /><About /></>
  },
  {
    path: "/education",
    element: <><ExtendedNavbar/><Education/></>
  },
  {
    path: "/projects",
    element: <><ExtendedNavbar/><Projects/></>
  },
  {
    path: "/skills",
    element: <><ExtendedNavbar /><Skills /></>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
