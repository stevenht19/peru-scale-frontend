/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Product } from 'models/Products'
import { Link } from 'react-router-dom';
import { Routes } from 'consts/routes';

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`${Routes.PRODUCTS}/${product.id}`} className="product-card shadow pb-3 flex flex-col h-fit hover:bg-gray-100/60 cursor-pointer">
      <div className='p-3'>
        <img
          src={product.imagen || "/assets/imagen_articulo_por_defecto.jpg"}
          className='object-cover w-full'
          alt={product.nombre}
        />
      </div>
      <div className='px-4 flex flex-col'>
        <div className='pb-3'>
          <h3 className='font-bold mt-2 text-xl text-gray-900'>{product.nombre}</h3>
          <p className='text-md text-gray-600 mt-2'>{product.descripcion}</p>
          <div className='flex justify-between items-center mt-2'>
            <span className='block my-2 text-xl text-gray-800'>${product.precio.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard;
