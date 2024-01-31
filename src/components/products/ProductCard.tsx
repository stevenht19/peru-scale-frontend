import React from 'react';
import './ProductCard.css';
import { Product } from 'models/Products';


interface ProductCardProps {
  product: Product
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
