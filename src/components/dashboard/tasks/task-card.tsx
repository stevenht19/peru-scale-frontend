import { GetQuotationRequest } from 'shared/quotation'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/es'
import { Badge, BadgeProps } from 'antd'
import { QuotationRequestState } from 'models/Quotation'
import { Link } from 'react-router-dom'

dayjs.extend(relativeTime)

const statusColor = {
  [QuotationRequestState.PENDING]: 'processing',
  [QuotationRequestState.ATTENDED]: 'success',
  [QuotationRequestState.DENIED]: 'error',
  [QuotationRequestState.CANCELED]: 'success'
}

export const TaskCard = ({ cliente, empresa, fecha_registro, estado, id, id_servicio }: GetQuotationRequest) => {
  return (
    <Link to={`${id}`} className='hover:bg-gray-50 rounded-md p-3 overflow-hidden'>
      <div className='flex justify-between'>
        <div className='flex gap-2 text-sm bg-gray-100 w-fit px-2 py-0.5 rounded'>
          <Badge status={statusColor[estado] as BadgeProps['status']} />
          <span className='capitalize'>
            {estado}
          </span>
        </div>
        <time className='text-gray-500'>{dayjs(fecha_registro).locale('es').fromNow()}</time>
      </div>
      <div className='flex justify-between'>
        <div className='my-1'>
          <h2 className='text-lg font-semibold text-gray-800'>{cliente}</h2>
        </div>
      </div>
      <p className='text-gray-600'>
      {id_servicio ? 'Solicitud de servicio' : 'Solicitud de compra'} emitida por la empresa {empresa}
      </p>
    </Link>
  )
}
