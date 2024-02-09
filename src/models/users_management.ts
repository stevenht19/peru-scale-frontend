export interface UserManagement {
    id: number;
    correo: string;
    nombres: string | null;
    apellidos: string | null;
    direccion: string | null;
    telefono: string | null;
    dni: string;
    fecha_registro: string; 
    usuario_registro: string;
    fecha_actualizacion: string | null; 
    usuario_actualizacion: string | null;
    id_rol: number;
    estado: 'activo' | 'inactivo';  
  }
  