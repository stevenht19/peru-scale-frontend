import { User } from '../models/User';

export type GetUserClient = User &{
id : number
correo: string
nombres : string | null
apellidos : string | null
direccion : string | null
telefono : string | null
dni : string | null


}