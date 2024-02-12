import { GetProductsQuotationRequest } from 'shared/quotation'
import { Image } from 'antd'

type ProductDetailsProps = {
  products: GetProductsQuotationRequest[]
}

export const ProductsDetailsTable: React.FC<ProductDetailsProps> = ({ products }) => {
  return <>
    <h3 className='font-semibold text-lg mt-8 mb-3'>Productos</h3>
    <table>
      <tr>
        <th>
          Imagen
        </th>
        <th>
          Modelo de Balanza
        </th>
        <th>
          Cantidad
        </th>
      </tr>
      <tbody>
        {products.map((product) => (
          <tr>
            <td>
              <Image
                src={product.imagen}
                width={45}
                height={45}
                alt={product.nombre}
                className='my-2'
              />
            </td>
            <td>
              {product.nombre}
            </td>
            <td>
              {product.cantidad}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
}
