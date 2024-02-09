import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './consts/routes'; // Asegúrate de que la ruta de importación sea correcta
import { AuthClientGuard } from './hocs/auth'; // Verifica las rutas de importación
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import { UserSessionProvider } from './context/user.context'; // Verifica las rutas de importación
import Products from './pages/products/products';
import List from './pages/pre quote list/list';
import ConfigProvider from './context/config.context'; // Verifica las rutas de importación
import RecoverPassword from './pages/recover/recover-password';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './pages/products/[id]';
import VerifyAccount from './pages/signup/verify';
import Services from './pages/services/services';
import UserAdmin from './pages/user-admin/UserAdmin'; // Verifica las rutas de importación

const router = createBrowserRouter([
  {
    path: Routes.HOME, // La ruta debe ser '/', si es que Routes.HOME así lo indica
    element: <Home />,
  },
  {
    path: Routes.SIGNIN, // La ruta debe ser '/signin', si es que Routes.SIGNIN así lo indica
    element: (
      <AuthClientGuard>
        <Login />
      </AuthClientGuard>
    )
  },
  {
    path: Routes.SIGNUP, // La ruta debe ser '/signup', si es que Routes.SIGNUP así lo indica
    element: (
      <AuthClientGuard>
        <Signup />
      </AuthClientGuard>
    )
  },
  {
    path: Routes.VERIFY, // La ruta debe ser '/verify', si es que Routes.VERIFY así lo indica
    element: <VerifyAccount />
  },
  {
    path: Routes.PRODUCTS, // La ruta debe ser '/products', si es que Routes.PRODUCTS así lo indica
    element: <Products />
  },
  {
    path: Routes.PRODUCT_DETAILS, // La ruta debe ser '/products/:id', si es que Routes.PRODUCT_DETAILS así lo indica
    element: <ProductDetails />
  },
  {
    path: Routes.RECOVER, // La ruta debe ser '/recover', si es que Routes.RECOVER así lo indica
    element: (
      <AuthClientGuard>
        <RecoverPassword />
      </AuthClientGuard>
    )
  },
  {
    path: Routes.LIST, // La ruta debe ser '/list', si es que Routes.LIST así lo indica
    element: <List />
  },
  {
    path: Routes.SERVICES, // La ruta debe ser '/services', si es que Routes.SERVICES así lo indica
    element: <Services />
  },
  {
    path: Routes.USER_ADMIN, // La ruta debe ser '/admin/users', si es que Routes.USER_ADMIN así lo indica
    element: <UserAdmin />
  },
  // ... Aquí puedes añadir más rutas según necesites ...
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider>
      <UserSessionProvider>
        <RouterProvider router={router} />
      </UserSessionProvider>
    </ConfigProvider>
  </React.StrictMode>
);
