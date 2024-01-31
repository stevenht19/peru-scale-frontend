import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductCard from '../../components/products/ProductCard';
import './Products.css';
import { Header } from 'layouts/header'

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/categorias')
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      axios.get(`http://localhost:3000/productos?categoria=${selectedCategory.id}`)
        .then(response => {
          // Asegúrate de que response.data contiene solo los productos de la categoría seleccionada
          setProducts(response.data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    } else {
      setProducts([]);
    }
  }, [selectedCategory]);
  

  if (loading) return <div className="text-center"><span className="spinner-border text-primary" role="status"></span></div>;
  if (error) return <div className="alert alert-danger" role="alert">Error: {error.message}</div>;

  return (
    <>
      <Header />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`list-group-item list-group-item-action ${selectedCategory && selectedCategory.id === category.id ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.nombrecategoria}
                </button>
              ))}
            </div>
          </div>
          <div className="col-md-9">
            <h2>{selectedCategory ? selectedCategory.nombrecategoria : 'Seleccione una categoría'}</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {products.filter(product => product.categoria === selectedCategory.id).map(filteredProduct => (
                <ProductCard key={filteredProduct.id} product={filteredProduct} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;