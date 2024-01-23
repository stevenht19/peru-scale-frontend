import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Routes } from 'consts/routes.ts'
import './index.css'
import Home from 'pages/home/home'

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
