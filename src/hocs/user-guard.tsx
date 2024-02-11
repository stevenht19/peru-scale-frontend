import { ROLES } from 'consts/roles'
import { Routes } from 'consts/routes'
import { useSession } from 'hooks/use-session'
import { UnauthorizedPage } from 'pages/403'
import { Navigate } from 'react-router-dom'

type UserGuard = {
  role?: ROLES[],
  privateRoute?: boolean
  nullable?: boolean
  children: React.ReactNode
  customPath?: string
}

export const UserGuard: React.FC<UserGuard> = ({
  role,
  privateRoute,
  nullable,
  customPath,
  children
}) => {
  const { user } = useSession()

  if (user === null && privateRoute) {
    return <Navigate to={customPath ?? Routes.HOME} />
  }

  if (user === null) return null

  // SI EL USUARIO TIENE EL ROL QUE LE HEMOS PASADO AL COMPONENTE
  if (role?.includes(user!.nombre_rol)) {
    return children
  }

  // SI EL USUARIO NO TIENE EL ROL DEL COMPONENTE QUE ME REDIRECCIONE A H0ME
  if (!(role?.includes(user!.nombre_rol)) && privateRoute) {
    return <Navigate to={customPath ?? Routes.HOME} />
  }

  // SI EL USUARIO ES NULL O NO TIENE EL ROL, ENTONCES QUE ME DEVUELVA NULL
  if ((user === null) && nullable || !role?.includes(user!.nombre_rol) && nullable) {
    return null
  }

  // SI EL USUARIO NO TIENE EL ROL Y NO ES RUTA PRIVADA, ENTONCES MUESTRA UNAUTHORIZED
  return <UnauthorizedPage />
}
