import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/forms/ProductCard'; 
import './Products.css';

const groupProductsByCategory = (productsArray) => {
  return productsArray.reduce((accumulator, product) => {
    const { categoria } = product;
    accumulator[categoria] = accumulator[categoria] || [];
    accumulator[categoria].push(product);
    return accumulator;
  }, {});
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [groupedProducts, setGroupedProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/productos')
      .then(response => {
        setProducts(response.data);
        // Agrupamos los productos por categoría después de obtenerlos
        setGroupedProducts(groupProductsByCategory(response.data));
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="products-container">
      {Object.keys(groupedProducts).map(categoria => (
        <div key={categoria} className="category-section">
          <h2 className="category-title">{categoria}</h2>
          <div className="product-list">
            {groupedProducts[categoria].map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;