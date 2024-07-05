import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Education from './Component/Education/Education.jsx';
import About from './Component/pages/About/About.jsx';
import Contact from './Component/pages/Contact/Contact.jsx';
import HomePage from './Component/pages/HomePage/HomePage.jsx';
import NotFound from './Component/pages/NotFound/NotFound.jsx';
import Services from './Component/pages/Services/Services.jsx';
import Projects from './Component/Projects/Projects.jsx';
import TechStack from './Component/TechStack/TechStack.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <NotFound></NotFound>,

    children:[
      {
        path: '/about',
       element: <About></About>
      },
      {
        path: '/services',
       element: <Services></Services>
      },
      {
        path: '/tech-stack',
       element: <TechStack></TechStack>
      },
      {
        path: '/education',
       element: <Education></Education>
      },
      {
        path: '/projects',
       element: <Projects></Projects>
      },
      {
        path: '/contact',
       element: <Contact></Contact>
      }
     
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}  />
  </React.StrictMode>,
)
