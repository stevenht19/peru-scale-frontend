export const enum Routes {
  HOME = '/',
  AUTH = '/auth',
  SIGNUP = '/signup',
  SIGNIN = '/signin',
  LOGOUT = '/logout',

  EDITACCOUNT = '/edit',

  USER_ADMIN = 'admin/users', // la ruta de administración de usuarios


  PRODUCTS = '/products',  //ruta para productos
  PRODUCT_DETAILS = '/products/:id',  //  ruta para detalles de productos (usando un parámetro)

  RECOVER = '/recover',

  LIST = '/list', //lista pre cotizacion 

  ADMIN_USER ='/admin_user', //administracion de usuarios
  
  VERIFY = '/verify',
  SERVICES = '/services',
  DASHBOARD = '/dashboard',
  REQUESTS = 'requests' // SOLICITUDES DE COTIZACION
} 