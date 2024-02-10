import { ROLES } from 'consts/roles'
import { Routes } from 'consts/routes'
import { useSession } from 'hooks/use-session'
import { UnauthorizedPage } from 'pages/404'
import { Navigate } from 'react-router-dom'

type UserGuard = {
  role: ROLES,
  privateRoute?: boolean
  children: React.ReactNode
}

export const UserGuard: React.FC<UserGuard> = ({
  role,
  privateRoute,
  children
}) => {
  const { user } = useSession()

  if ((user?.nombre_rol === ROLES.CLIENT) && privateRoute) {
    return <Navigate to={Routes.HOME} />
  }

  if (user?.nombre_rol === role) {
    return children
  } 

  return <UnauthorizedPage />
}
