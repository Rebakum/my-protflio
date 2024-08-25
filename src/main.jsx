import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Component/pages/HomePage/HomePage.jsx';
import NotFound from './Component/pages/NotFound/NotFound.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <NotFound></NotFound>,
       
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}  />
  </React.StrictMode>,
)
