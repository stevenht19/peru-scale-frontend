import { User, UserCredentials } from 'models/User'
import { HttpMethod, api } from 'utils/api'
import { deleteToken, getAccessToken, setToken } from 'utils/token'

export class AuthService {
  _basePath = import.meta.env.BASE_URL


  async getSession(): Promise<User> {
    const res = await api(HttpMethod.GET, '/account')
    return res.user
  }

  async login(credentials: UserCredentials) {
    try {
      const res = await api(HttpMethod.POST, '/login', credentials)

      if (res.error) {
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

  async signup(credentials: UserCredentials) {
    try {
      const res = await api(HttpMethod.POST, '/register', credentials, getAccessToken()!)
      
      if (res.error) {
        throw new Error(res.message)
      }

      return res
    } catch(err) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error = err as any
      throw new Error(error.message)
    }
  }

  async verifyAccount(personalData: Partial<User>, verifyToken: string) {
    try {
      const res = await api(HttpMethod.POST, '/verify-account', personalData, verifyToken)
      
      if (res.error) {
        throw new Error(res.message)
      }

      return res
    } catch(err) {
      const error = err as any
      throw new Error(error.message)
    }
  }

  async recoverPasswordByEmail(email: UserCredentials['correo']) {
    await api(HttpMethod.POST, '/recover-password', {
      correo: email
    })
  }

  async recoverPassword(password: string, token: string) {
    await api(HttpMethod.POST, '/recover', {
      password
    }, token)
  }
  async logout() {
    try {
      deleteToken();
    } catch (err) {
      if (typeof err === 'string') {
        throw new Error(err);
      } else {
        throw err; 
      }
    }
  }
  
}

const auth = new AuthService()

export { auth }