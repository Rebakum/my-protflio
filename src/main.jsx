import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Component/pages/About/About.jsx';
import HomePage from './Component/pages/HomePage/HomePage.jsx';
import TechStack from './Component/TechStack/TechStack.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children:[
      {
        path: '/about',
       element: <About></About>
      },
      {
        path: '/techStack',
       element: <TechStack></TechStack>
      }
     
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}  />
  </React.StrictMode>,
)
