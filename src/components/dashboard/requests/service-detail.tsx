import { OptionalServiceQuotationRequest } from 'shared/quotation'
import { DetailInfoParagraph } from './detail-row'

export const ServiceDetail: React.FC<OptionalServiceQuotationRequest> = ({
  descripcion_servicio,
  balanzaDescripcion,
  capacidadBalanza,
  mensaje
}) => {
  return (
    <>
      <h3 className='font-semibold text-lg mt-6 mb-3'>Servicio</h3>
      <ul className='flex flex-col gap-3'>
        <DetailInfoParagraph label='Tipo de Servicio:' info={descripcion_servicio} />
        <DetailInfoParagraph label='Modelo de balanza:' info={balanzaDescripcion} />
        <DetailInfoParagraph label='Capacidad de balanza (KG):' info={capacidadBalanza} />
        <DetailInfoParagraph label='Descripcion del Servicio:' />
        <li className='max-w-[30rem]'>
          - {mensaje}
        </li>
      </ul>
    </>
  )
}