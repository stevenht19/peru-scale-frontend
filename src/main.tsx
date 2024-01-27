import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Routes } from 'consts/routes.ts'
import { UserSessionProvider } from 'context/user.context'
import { AuthClientGuard } from 'hocs/auth'
import Home from 'pages/home/home'
import Login from 'pages/login/login'
import Signup from 'pages/signup/signup'
import './index.css'
import ConfigProvider from 'context/config.context'

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
  },
  {
    path: Routes.SIGNIN,
    element: (
      <AuthClientGuard>
        <Login />
      </AuthClientGuard>
    )
  },
  {
    path: Routes.SIGNUP,
    element: (
      <AuthClientGuard>
        <Signup />
      </AuthClientGuard>
    )
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider>
      <UserSessionProvider>
        <RouterProvider router={router} />
      </UserSessionProvider>
    </ConfigProvider>
  </React.StrictMode>
)
