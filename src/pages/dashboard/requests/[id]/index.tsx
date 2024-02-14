import { ProductsDetailsTable } from 'components/dashboard/requests/products-detail'
import { RequestDetailFooter } from 'components/dashboard/requests/request-detail-footer'
import { useRequestDetail } from 'hooks/use-request-detail'
import { QuotationRequest } from 'models/Quotation'
import { useParams } from 'react-router-dom'

const RequestDetail = () => {
  const params = useParams()
  const { request, products } = useRequestDetail(Number(params.id))
  const isClientRegistered = request?.id_cliente ? 'Registrado' : 'No registrado'

  return (
    <div className='p-4 flex flex-col h-full'>
      <h2 className='mb-4 text-xl font-bold'>
        Detalle de solicitud de cotización
      </h2>
      <h3 className='font-semibold text-lg mb-3 mt-1'>Cliente</h3>
      <ul className='flex flex-col gap-3'>
        <DetailInfoParagraph label='Nombres y Apellidos:' info={request?.cliente} />
        <DetailInfoParagraph label='DNI: ' info={request?.dni} />
        <DetailInfoParagraph label='Ubicación:' info={request?.direccion} />
        <DetailInfoParagraph label='Telefono:' info={request?.telefono} />
        <DetailInfoParagraph label='Tipo de cliente:' info={isClientRegistered} />
        <DetailInfoParagraph label='Medio de Pago:' info={request?.medioDePago} />
      </ul>
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
        <>
          <h3 className='font-semibold text-lg mt-8 mb-3'>Servicio</h3>
          <ul className='flex flex-col gap-3'>
            <DetailInfoParagraph label='Tipo de Servicio:' info={request.descripcion_servicio} />
            <DetailInfoParagraph label='Modelo de balanza:' info={request.balanzaDescripcion} />
            <DetailInfoParagraph label='Descripcion del Servicio:' />
            <li className='max-w-[30rem]'>
              - {request.mensaje}
            </li>
          </ul>
        </>
      )}
      {Boolean(products.length) && (
        <ProductsDetailsTable products={products} />
      )}
      <RequestDetailFooter {...request as QuotationRequest} />
    </div>
  )
}

const DetailInfoParagraph = ({
  label = '',
  info = ''
}) => {
  return (
    <li>
      <span className='mr-2'>
        {label}
      </span>
      {!!info.length && (
        info
      )}
    </li>
  )
}

export default RequestDetail
