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
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {categories.map(category => (
              <a className={`nav-link ${selectedCategory && selectedCategory.idcategoria === category.idcategoria ? "active" : ""}`}
                 key={category.idcategoria}
                 onClick={() => setSelectedCategory(category)}>
                {category.nombrecategoria}
              </a>
            ))}
          </div>
        </div>
        <div className="col-md-9">
          <h2 className="my-4">{selectedCategory ? selectedCategory.nombrecategoria : 'Seleccione una categoría'}</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {products.map(product => (
              <div key={product.id} className="col">
                <div className="card h-100">
                  <img src={product.imagen} className="card-img-top" alt={product.nombre} />
                  <div className="card-body">
                    <h5 className="card-title">{product.nombre}</h5>
                    <p className="card-text">{product.descripcion}</p>
                    <p className="card-text"><small className="text-muted">Stock: {product.stock}</small></p>
                  </div>
                  <div className="card-footer">
                    <small className="text-primary">Precio: {product.precio}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Products;