import { Header } from 'layouts/header'
import { useEffect, useState } from 'react'
import { Category, Product } from 'models/Products'
import { Link, useLocation } from 'react-router-dom'
import { Routes } from 'consts/routes'
import { Pagination, Skeleton } from 'antd'
import axios from 'axios'
import ProductCard from 'components/products/ProductCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Products.css'
import { useFetch } from 'hooks/use-fetch'

const defaultPageSize = 6

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)
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
        axios.get(`${import.meta.env.VITE_API_URL}/productos`)
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
          .get(`${import.meta.env.VITE_API_URL}/categorias/${categoryId}/productos`)
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

  const onChangePage = (page: number) => {
    setPage(page)
  }

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
                  onClick={() => setPage(1)}
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
                )) : products.length ? (
                  products?.filter(product => product.nombre !== null).map(product => (
                    <ProductCard key={product.id} product={product} />
                  )).slice((page === 1 ? 0 : defaultPageSize * (page - 1)), defaultPageSize * page)
                ) : 'No hay productos para esta categoria'}
              </div>
            }
            {Boolean(products.length) && (
              <div className='flex justify-end'>
                <Pagination
                  total={products.length}
                  onChange={onChangePage}
                  showTotal={(total, range) => `${range[0]}-${range[1]} de ${total} Productos`}
                  defaultPageSize={defaultPageSize}
                  current={page}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;