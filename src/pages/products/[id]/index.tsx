import { Button } from 'antd'
import { useProduct } from 'hooks/use-products'
import { Header } from 'layouts/header'
import { useParams } from 'react-router-dom'
import { QuantitySelector } from './quantity-selector'
import { PreQuotedProduct, Product } from 'models/Products'
import { useSession } from 'hooks/use-session'
import toast  from 'react-hot-toast'
import { useCounter } from 'hooks/use-count'

const notify = () => toast.success('Producto agregado a la lista de cotización');

export default function ProductDetails() {
  const params = useParams()
  const productId = Number(params.id)

  const { product } = useProduct(productId)

  return (
    <>
      <Header />
      <section className='max-w-6xl mx-auto flex-1 h-full mt-3'>
        {product && (
          <div className='grid md:grid-cols-2 gap-20 p-10'>
            <div className='bg-gray-100 p-4'>
              <img src={product?.imagen} alt={product.nombre} className='w-full' />
            </div>
            <ProductInformation product={product} />
          </div>
        )}
      </section>
    </>
  )
}


type ProductInformationProps = {
  product: Product
}

const ProductInformation = ({ product }: ProductInformationProps) => {
  const session = useSession()
  const { counter, add, subtract } = useCounter(1)

  const onSum = () => {
    add(() => product.stock)
  }

  const onSubtract = () => {
    subtract(() => 1)
  }

  const handleAddCotizationList = () => {
    const productToSave = {
      ...product,
      quantity: counter
    }
    const productsList = (JSON.parse(localStorage.getItem('scale_products_list')!) ?? []) as PreQuotedProduct[]

    if (!productsList?.some((product) => product.id === productToSave.id)) {
      localStorage.setItem('scale_products_list', JSON.stringify(productsList.concat(productToSave)))
      notify()
    }
  }

  return (
    <div className='p-2'>
      <div>
        <h2 className='text-2xl font-bold mb-2 text-gray-900'>{product.nombre}</h2>
        <p className='text-gray-600'>{product.descripcion}</p>
        <div className='my-4 max-w-[11rem]'>
          <QuantitySelector
            counter={counter}
            add={onSum}
            subtract={onSubtract}
          />
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-xl block font-medium my-3 text-gray-900'>S/. {product.precio}</span>
          <span className='block my-2'>Stock: {product.stock}</span>
        </div>

      </div>
      {Boolean(product?.beneficio) &&
        <div className='mb-4'>
          <h3 className='font-semibold text-xl mt-4 text-gray-900'>Tus Beneficios:</h3>
          <p className='mt-1 text-gray-600'>{session.user ? product.beneficio : 'Inicia Sesión para acceder a los beneficios que tenemos para ti'}</p>
        </div>
      }
      <Button type='primary' size='large' className='w-full mt-3' onClick={handleAddCotizationList}>
        Agregar a lista de cotización
      </Button>
    </div>
  )
}