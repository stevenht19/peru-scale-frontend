import { Button } from 'antd'
import { EditServicePrice } from 'components/dashboard/requests/edit-service-price'
import { ProductsDetailsTable } from 'components/dashboard/requests/products-detail'
import { ClientDetail } from 'components/dashboard/requests/client-detail'
import { ServiceDetail } from 'components/dashboard/requests/service-detail'
import { useRequestDetail } from 'hooks/use-request-detail'
import { useParams, useNavigate } from 'react-router-dom'
import { Routes } from 'consts/routes'
import { QuotationRequestState } from 'models/Quotation'
import dayjs from 'dayjs'

export const TaskDetail = () => {
  const params = useParams()
  const navigate = useNavigate()
  const requestId = Number(params.id)
  const {
    request,
    products,
    loading,
    reload
  } = useRequestDetail(requestId)

  if (!request) return null
  if (loading) return null

  const handleCotizacionClick = () => {
    navigate(`/dashboard/${Routes.QUOTE}/${request.id}`);
  }

  return (
    <div className='border-l p-4 h-screen flex flex-col gap-3.5 animate-taskDetail'>
      {Boolean(!request.id_servicio && products?.length) && (
        <div className='my-4 flex flex-col'>
          <ProductsDetailsTable
            products={products}
            disableTitle={true}
            enableEdition={Boolean(request.id_cliente)}
            disabled={request.estado === QuotationRequestState.ATTENDED}
          />
        </div>
      )}
      {request?.id_servicio && (
        <div>
          <ServiceDetail {...request} />
          <EditServicePrice
            id={request.id_servicio}
            precio={request.precio}
            reload={reload}
          />
        </div>
      )}
      <ClientDetail {...request!} />
      {request.estado === QuotationRequestState.PENDING ? (
        <div>
        {request.id_servicio ? (
          <Button type='primary' onClick={handleCotizacionClick} className='mt-4' disabled={!Boolean(request.precio)}>
            Realizar Cotización
          </Button>
        ) : (
          <Button type='primary' onClick={handleCotizacionClick} className='mt-4'>
            Realizar Cotización
          </Button>
        )}
      </div>
      ) : (
        <div>
          Cotización emitida la fecha: {dayjs(request.fecha_atencion).format('D MMMM YYYY, HH:mm:ss')}
        </div>
      )}
    </div>
  )
}
