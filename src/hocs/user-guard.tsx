import { ROLES } from 'consts/roles'
import { Routes } from 'consts/routes'
import { useSession } from 'hooks/use-session'
import { UnauthorizedPage } from 'pages/403'
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

  if ((user?.nombre_rol !== role) && privateRoute) {
    return <Navigate to={Routes.HOME} />
  }

  if ((user === null) && nullable || (user?.nombre_rol !== role) && nullable) {
    return null
  }
  
  // SI EL USUARIO TIENE EL ROL QUE LE HEMOS PASADO AL COMPONENTE
  if (user?.nombre_rol === role) {
    return children
  }

  // SI EL USUARIO NO TIENE EL ROL Y NO ES RUTA PRIVADA, ENTONCES MUESTRA UNAUTHORIZED
  return <UnauthorizedPage />
}
