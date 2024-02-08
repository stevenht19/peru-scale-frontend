import { Header } from 'layouts/header'
import { useEffect, useState } from 'react'
import { Category, Product } from 'models/Products'
import { Link, useLocation } from 'react-router-dom'
import { Routes } from 'consts/routes'
import { Skeleton } from 'antd'
import axios from 'axios'
import ProductCard from 'components/products/ProductCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Products.css'
import { useFetch } from 'hooks/use-fetch'

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const location = useLocation()

  const category = location?.search.split('?category=')[1]
  
  const decodedCategory = category && decodeURIComponent(category)

  const { data: categories } = useFetch<Category[]>('/categorias')

  useEffect(() => {

    const getProducts = () => {
      const categoryId = categories
        ?.find(cat => cat?.nombrecategoria?.trim() === decodedCategory?.trim())
        ?.idcategoria

      if (!categoryId) {
        axios.get('http://localhost:3000/productos')
          .then((response) => {
            setProducts(response.data)
            setLoading(false)
          })
          .catch(err => {
            setError(err);
            setLoading(false)
          })
      } else {
        axios
          .get(`http://localhost:3000/categorias/${categoryId}/productos`)
          .then(({ data }) => {
            setProducts(data)
            setLoading(false)
          })
          .catch(err => {
            setError(err);
            setLoading(false)
          })
      }
    }

    getProducts()


  }, [categories?.length, decodedCategory])

  if (error) return <div className="alert alert-danger" role="alert">Error: {error.message}</div>;

  return (
    <>
      <Header />
      <section className="overflow-hidden max-w-6xl mx-auto mt-1">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group pt-3">
              {Boolean(categories?.length) && categories?.map(category => (
                <Link
                  key={category.idcategoria}
                  className={`py-2.5 px-3 list-group-item-action`}
                  to={`${Routes.PRODUCTS}?category=${category?.nombrecategoria}`}
                >
                  {category.nombrecategoria}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-md-9 p-4">
            <h2 className='font-bold'>{decodedCategory ?? 'Todos los productos'}</h2>
            {
              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loading ? [1, 2, 3].map((n) => (
                  <div className='w-full' key={n}>
                    <Skeleton />
                  </div>
                )) : products.length ? products?.filter(product => product.nombre !== null).map(product => (
                  <ProductCard key={product.id} product={product} />
                )) : 'No hay productos para esta categoria'}
              </div>
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;