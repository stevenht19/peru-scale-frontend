import { User } from 'models/User'
import { createContext, useEffect, useState } from 'react'
import { auth } from 'services/auth'
import { getToken } from 'utils/token'

interface UserAuthenticationContextProps {
  user: User | null
  userName: string | null; // Agregamos el nombre del usuario al contexto
  loading: boolean
  logoutUser(): void
}

export const UserAuthenticationContext = createContext({} as UserAuthenticationContextProps)

export function UserSessionProvider({ children }: {
  children: React.ReactNode | null
}) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getSession = async () => {
      const token = getToken()
      if (!token) {
        setLoading(false)
        return
      }

      auth.getSession()
        .then((user) => {
          user && setUser(user)
        }).finally(() => {
          setLoading(false)
        })
    }

    getSession()
  }, [])

  const logoutUser = () => {
    setUser(null)
    auth.logout()
  }

    // Extraemos el nombre del usuario si existe, de lo contrario, usamos null
    const userName = user?.usuario_registro || null;

  return (
    <UserAuthenticationContext.Provider value={{
      user,
      userName, // Agregamos el nombre del usuario al contexto
      loading,
      logoutUser
    }}>
      {
        loading ? null : children
      }
    </UserAuthenticationContext.Provider>
  )
}