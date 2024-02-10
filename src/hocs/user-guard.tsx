import { ROLES } from 'consts/roles'
import { Routes } from 'consts/routes'
import { useSession } from 'hooks/use-session'
import { UnauthorizedPage } from 'pages/404'
import { Navigate } from 'react-router-dom'

type UserGuard = {
  role: ROLES,
  privateRoute?: boolean
  nullable?: boolean
  children: React.ReactNode
}

export const UserGuard: React.FC<UserGuard> = ({
  role,
  privateRoute,
  nullable,
  children
}) => {
  const { user } = useSession()

  // SI EL CLIENTE INTENTA ACCEDER A UNA PARTE DE LA WEB QUE ES SOLO PARA TRABAJADORES Y ADMINS Y LO REDERIDIGUE
  if ((user?.nombre_rol === ROLES.CLIENT || !user) && privateRoute) {
    return <Navigate to={Routes.HOME} />
  }

  if ((user === null) && nullable) {
    return null
  }
  
  // SI EL USUARIO TIENE EL ROL QUE LE HEMOS PASADO AL COMPONENTE
  if (user?.nombre_rol === role) {
    return children
  } 

  return <UnauthorizedPage />
}
