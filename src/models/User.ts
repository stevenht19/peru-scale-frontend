import { ROLES } from 'consts/roles'

export interface User {
  id: number
  correo: string
  password: string | null
  nombres: string | null
  apellidos: string | null
  direccion: string | null
  telefono: string | null
  dni: string | null
  id_rol?: number  
  nombre_rol: ROLES
  estado?: 'activo' | 'inactivo'
  usuario_actualizacion?: string
  usuario_registro?: string
  // id_cliente?:String
}

export type UserCredentials = Pick<User, 'correo' | 'password'>
