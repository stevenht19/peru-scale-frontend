export interface User {
  id: number
  correo: string
  password: string | null
  nombres: string | null
  apellidos: string | null
  direccion: string | null
  telefono: string | null
  dni: string | null
  id_rol: number
  estado?: 'activo' | 'inactivo'
}

export type UserCredentials = Pick<User, 'correo' | 'password'>
  
