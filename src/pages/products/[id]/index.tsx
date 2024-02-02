import { Button } from 'antd'
import { useProduct } from 'hooks/use-products'
import { Header } from 'layouts/header'
import { useParams } from 'react-router-dom'
import { QuantitySelector } from './quantity-selector'
import { PreQuotedProduct, Product } from 'models/Products'
import { useSession } from 'hooks/use-session'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

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
  const [quantity, setQuantity] = useState<number>(1)
  const session = useSession()

  const onSum = () => {
    setQuantity(q => q === product.stock || q === 5 ? q : q + 1)
  }

  const onSubtract = () => {
    setQuantity(q => q !== 1 ? q - 1 : q)
  }

  const handleAddCotizationList = () => {
    const productToSave = {
      ...product,
      quantity
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
        <Toaster />
        <h2 className='text-2xl font-bold mb-2 text-gray-900'>{product.nombre}</h2>
        <p className='text-gray-600'>{product.descripcion}</p>
        <div className='my-3'>
          <QuantitySelector
            quantity={quantity}
            onAdd={onSum}
            onSubtract={onSubtract}
          />
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-xl block font-medium my-3 text-gray-900'>S/. {product.precio.toFixed(2)}</span>
          <span className='block my-2'>Stock: {product.stock}</span>
        </div>

      </div>
      {Boolean(product.beneficio) &&
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