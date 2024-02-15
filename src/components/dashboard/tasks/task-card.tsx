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
  [QuotationRequestState.CANCELED]: 'success',
  [QuotationRequestState.DENIED]: 'error'
}

export const TaskCard = ({ cliente, empresa, fecha_registro, estado, id }: GetQuotationRequest) => {
  return (
    <Link to={`${id}`}className='hover:bg-gray-50 rounded-md p-3'>
      <div className='flex justify-between'>
        <div className='flex gap-2 text-sm bg-gray-100 w-fit px-2 py-0.5 rounded'>
          <Badge status={statusColor[estado] as BadgeProps['status']} />
          <span className='capitalize'>
            {estado === QuotationRequestState.CANCELED ? 'atendido' : estado}
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
        Solicitud de compra emitida por la empresa {empresa}
      </p>
    </Link>
  )
}
