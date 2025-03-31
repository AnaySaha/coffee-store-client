
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpadteCoffee from './components/UpadteCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
{
  path: "addCoffee",
  element: <AddCoffee></AddCoffee>
},

{
  path: 'updateCoffee/:id',
  element: <UpadteCoffee></UpadteCoffee>,
  loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
}

]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
