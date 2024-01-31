import { useSession } from 'hooks/use-session'
import { Navigate } from 'react-router-dom'

export function AuthClientGuard({ children }: {
  children: React.ReactNode
}) {
  const { user } = useSession()

  return user ? <Navigate to='/' replace={true} /> : children
}
