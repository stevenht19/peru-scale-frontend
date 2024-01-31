/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductCard from '../../components/products/ProductCard'
import './Products.css'
import { Header } from 'layouts/header'

const Products = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

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
      axios.get(`http://localhost:3000/productos?categoria=${selectedCategory.nombrecategoria}`)
        .then(response => {
          setProducts(response.data);
        })
        .catch(err => {
          setError(err);
        });
    }
  }, [selectedCategory]);

  if (loading) return <div className="text-center"><span className="spinner-border text-primary" role="status"></span></div>;
  if (error) return <div className="alert alert-danger" role="alert">Error: {error.message}</div>;

  return <>
    <Header />
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            {categories.map(category => (
              <button type="button" key={category.idcategoria}
                className={`list-group-item list-group-item-action ${selectedCategory && selectedCategory.idcategoria === category.idcategoria ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}>
                {category.nombrecategoria}
              </button>
            ))}
          </div>
        </div>
        <div className="col-md-9">
          <h2>{selectedCategory ? selectedCategory.nombrecategoria : 'Seleccione una categoría'}</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Products;