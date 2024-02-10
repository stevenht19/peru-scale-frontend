import { User } from 'models/User'

export type GetUser = User & {
  nombre_completo: string
  nombre_rol: string
  fecha_actualizacion?: string
  usuario_actualizacion?: string
}