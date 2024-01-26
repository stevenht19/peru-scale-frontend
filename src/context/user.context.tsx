import { User } from 'models/User'
import { createContext, useEffect, useState } from 'react'
import { auth } from 'services/auth'
import { getToken } from 'utils/token'

interface UserAuthenticationContextProps {
  user: User | null
}

export const UserAuthenticationContext = createContext({} as UserAuthenticationContextProps)

export function UserSessionProvider({ children }: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const getSession = async () => {
      const token = getToken()

      if (!token) return

      auth.getSession(token)
        .then((user) => {
          user && setUser(user)
        })
    }

    getSession()
  }, [])

  return (
    <UserAuthenticationContext.Provider value={{
      user
    }}>
      {children}
    </UserAuthenticationContext.Provider>
  )
}