import { ClientDetail } from 'components/dashboard/requests/client-detail'
import { DetailInfoParagraph } from 'components/dashboard/requests/detail-row'
import { ProductsDetailsTable } from 'components/dashboard/requests/products-detail'
import { RequestDetailFooter } from 'components/dashboard/requests/request-detail-footer'
import { ServiceDetail } from 'components/dashboard/requests/service-detail'
import { useRequestDetail } from 'hooks/use-request-detail'
import { QuotationRequest } from 'models/Quotation'
import { useParams } from 'react-router-dom'

const RequestDetail = () => {
  const params = useParams()
  const { request, products } = useRequestDetail(Number(params.id))

  if (!request) return null

  return (
    <div className='p-8 flex flex-col h-full'>
      <h2 className='mb-4 text-xl font-bold'>
        Detalle de solicitud de cotización
      </h2>
      <h3 className='font-semibold text-lg mb-3 mt-1'>Cliente</h3>
      <ClientDetail {...request!} />
      {
        Boolean(request?.id_asignado) && (
          <>
            <h3 className='font-semibold text-lg mt-8 mb-3'>Encargado: </h3>
            <ul className='flex flex-col gap-3'>
              <DetailInfoParagraph label='Nombres y Apellidos:' info={`${request?.nombre_asignado} ${request?.apellidos_asignado}`} />
            </ul>
          </>
        )
      }
      {request?.id_servicio && (
        <ServiceDetail {...request} />
      )}
      {Boolean(products.length) && (
        <ProductsDetailsTable
          products={products}
        />
      )}
      <RequestDetailFooter {...request as QuotationRequest} />
    </div>
  )
}


export default RequestDetail
