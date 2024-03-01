import { GetProductsQuotationRequest } from 'shared/quotation'
import { Button, Image, Input, message } from 'antd'
import { useBoolean } from 'hooks/use-boolean'
import { useMemo, useState } from 'react'
import { ProductInput } from './product-input'
import { editProductsPrice } from 'services/quotation'

type ProductDetailsProps = {
  enableEdition?: boolean
  disableTitle?: boolean
  disabled: boolean
  products: GetProductsQuotationRequest[]
}

export const ProductsDetailsTable: React.FC<ProductDetailsProps> = ({
  products,
  disabled,
  disableTitle,
  enableEdition
}) => {
  const [isEditing, setEditionMode] = useBoolean()
  const [isSaving, setIsSaving] = useBoolean()
  const [productsDetails, setProducts] = useState
    <GetProductsQuotationRequest[]>(() => products.map((product) => {
      return {
        ...product,
        precio_unitario: product.precio_unitario ? product.precio_unitario : ((product.precio) * product.cantidad)
      }
    }))

  const handleEditProducts = (productValue: any, id: number) => {
    if (disabled) return

    setEditionMode.on()
    setProducts((products) => {
      return products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            ...productValue
          }
        }

        return product
      })
    })
  }

  const handleSave = async () => {
    setEditionMode.off()
    setIsSaving.on()
    await editProductsPrice(productsDetails.map(({ precio_unitario, id }) => ({ id, precio_unitario })) as any)
    setIsSaving.off()
  }

  return <>
    {!enableEdition && !disableTitle && <h3 className='font-semibold text-lg mt-8 mb-3'>Productos</h3>}
    <table>
      <thead>
        {
          !enableEdition && (
            <th />
          )
        }
        <th>{enableEdition ? 'Balanza' : 'Modelo de Balanza'}</th>
        <th>Cantidad</th>
        {enableEdition && (
          <>
            <th>
              Precio
            </th>
          </>
        )}
        {enableEdition && (
          <>
            <th>
              Descuento
            </th>
          </>
        )}
      </thead>
      <br />
      <tbody>
        {productsDetails.map((product, i) => (
          <>
            <tr>
              {!enableEdition && (
                <td>
                  <Image
                    src={product!.imagen!}
                    width={45}
                    height={45}
                    alt={product.nombre}
                    className='mt-1'
                  />
                </td>
              )}
              <td>{product.nombre}</td>
              <td>{product.cantidad}</td>
              {enableEdition && (
                <ProductInput
                  disabled={disabled}
                  name='precio_unitario'
                  value={(product.precio_unitario ?? product.precio)}
                  handleEditProduct={handleEditProducts}
                  id={product.id}
                />
              )}
              <Discount value={(product.precio_unitario ?? product.precio)} id={product.id} name='precio_unitario' handleEditProducts={handleEditProducts} />
            </tr>
          </>
        ))}
      </tbody>
    </table>
    {(isEditing && !disabled) && (
      <Button onClick={handleSave} className='mt-4' loading={isSaving}>
        {isSaving ? 'Guardando...' : 'Guardar'}
      </Button>
    )}
  </>
}


const Discount = ({ id = 0, value = 0, name = '', handleEditProducts = (_a: any, _b: any) => {} }) => {
  const [v, setV] = useState(0)

  const price = useMemo(() => value, [])

  const showToast = () => {
    message.error('Descuento maximos hasta del 10%')
  }

  const onChange = (e: any) => {

    if (Number(e.target.value) < 0) {
      return
    }

    if (Number(e.target.value) > 10) {
      showToast()
      return
    }

    handleEditProducts({
      [name]: price - (price / 100) * Number(e.target.value)
    }, id)


    setV(Number(e.target.value))
  }

  return (
    <td>
      <Input
        addonAfter={'%'}
        type='number'
        style={{ width: 120 }}
        max={10}
        value={v}
        onChange={onChange}
      />
    </td>
  )
}