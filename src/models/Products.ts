//Productos 
export interface Product {
    id:number;
    nombre: string;
    categoria: string;
    imagen: string
    beneficio: string
    precio: number;
    descripcion: string | null; //
    stock: number;
  }