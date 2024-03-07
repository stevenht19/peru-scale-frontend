import { UserAuthenticationContext } from 'context/user.context'
import { useContext } from 'react'

export const useSession = () => {
  return useContext(UserAuthenticationContext)
}