import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Routes } from 'consts/routes.ts'
import './index.css'
import Home from 'pages/home/home'
import Login from 'pages/login/login'
import Signup from 'pages/signup/signup'

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
  },
  {
    path: Routes.SINGIN,
    element: <Login />
  },
  {
    path: Routes.SIGNUP,
    element: <Signup />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
