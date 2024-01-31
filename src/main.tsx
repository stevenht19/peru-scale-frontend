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
import { UserSessionProvider } from 'context/user.context'
import Products from 'pages/products/products'

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
  },
  {
    path: Routes.SIGNIN,
    element: <Login />
  },
  {
    path: Routes.SIGNUP,
    element: <Signup />
  },

  {
    path: Routes.PRODUCTS,
    element: <Products />
  },


])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserSessionProvider>
      <RouterProvider router={router} />
    </UserSessionProvider>
  </React.StrictMode>
)
