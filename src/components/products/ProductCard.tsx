import React from 'react';
import './ProductCard.css';
import { Product } from 'models/Products';

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/assets/imagen_articulo_por_defecto.jpg";
  };

  const handleCotizacionClick = () => {
    // Implementa la lógica para la solicitud de cotización aquí
    alert(`Ver detalles completos de: ${product.nombre}`);
  };

  return (
    <div className="product-card">
      <img 
        src={product.imagen || "/assets/imagen_articulo_por_defecto.jpg"} 
        alt={product.nombre} 
        onError={handleImageError}
      />
      <h3>{product.nombre}</h3>
      <p>{product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
      <p>Stock: {product.stock}</p>
      {product.beneficio && <p>Beneficio: {product.beneficio}</p>}
      <button 
        className="btn-cotizacion" 
        onClick={handleCotizacionClick}
      >
        Ver Producto
      </button>
    </div>
  );
};

export default ProductCard;
