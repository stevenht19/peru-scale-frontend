import { User } from 'models/User'

export type GetUser = User & {
  nombre_completo?: string
  nombre_rol: string
  fecha_actualizacion: string | null
}

export type CreateUser = Omit<User, 'nombre_rol'>