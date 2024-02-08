import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Routes } from 'consts/routes.ts'
import { AuthClientGuard } from 'hocs/auth'
import Home from 'pages/home/home'
import Login from 'pages/login/login'
import Signup from 'pages/signup/signup'
import { UserSessionProvider } from 'context/user.context'
import Products from 'pages/products/products'
import List from 'pages/pre quote list/list'
import ConfigProvider from 'context/config.context'
import RecoverPassword from 'pages/recover/recover-password'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from 'pages/products/[id]'
import VerifyAccount from 'pages/signup/verify'
import Services from 'pages/services/services'


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
  {
    path: Routes.VERIFY,
    element: <VerifyAccount />
  },
  {
    path: Routes.PRODUCTS,
    element: <Products />
  },
  {
    path: Routes.PRODUCT_DETAILS,
    element: <ProductDetails />
  },
  {
    path: Routes.RECOVER,
    element: (
      <AuthClientGuard>
        <RecoverPassword />
      </AuthClientGuard>
    )
  },
  {
    path: Routes.LIST,
    element: <List />
  },
  {
    path: Routes.SERVICES,
    element: <Services />
  }

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
