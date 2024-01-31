import React from 'react';
import './ProductCard.css';


interface ProductCardProps {
  product: {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    imagen: string;
    beneficio?: string; 
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imagen} alt={product.nombre} />
      <h3>{product.nombre}</h3>
      <p>{product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
      <p>Stock: {product.stock}</p>
      {product.beneficio && <p>Beneficio: {product.beneficio}</p>}
    </div>
  );
};

export default ProductCard;
