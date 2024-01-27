import { User, UserCredentials } from 'models/User'
import { HttpMethod, api } from 'utils/api'
import { setToken } from 'utils/token'

export class AuthService {
  _basePath = import.meta.env.BASE_URL


  async getSession(token: string): Promise<User> {
    const res = await api(HttpMethod.GET, '/account', token)
    return res.user
  }

  async login(credentials: UserCredentials) {
    try {
      const res = await api(HttpMethod.POST, '/login', credentials)

      if (res.message) {
        throw new Error(res.message)
      }
      
      res.token && setToken(res.token)
      return res
    } catch(err) {
      if (typeof err === 'string') {
        throw new Error(err)
      }
    }
  }

  async signup(user: User) {
    const res = await api(HttpMethod.POST, '/register', user)
    setToken(res.token)
  }
}

const auth = new AuthService()

export { auth }