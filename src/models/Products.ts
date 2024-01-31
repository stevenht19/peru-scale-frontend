//Productos 
export interface Product {
    id:number;
    nombre: string;
    categoria: string;
    precio: number;
    descripcion: string | null; //
    stock: number;
  }