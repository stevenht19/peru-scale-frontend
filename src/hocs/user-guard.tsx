import { ROLES } from 'consts/roles'
import { useSession } from 'hooks/use-session'
import { UnauthorizedPage } from 'pages/404'

type UserGuard = {
  role: ROLES,
  children: React.ReactNode
}

export const UserGuard: React.FC<UserGuard> = ({
  role,
  children
}) => {
  const { user } = useSession()

  if (user?.nombre_rol === role) {
    return children
  } 

  return <UnauthorizedPage />
}
