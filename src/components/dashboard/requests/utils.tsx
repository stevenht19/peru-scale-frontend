import { Button, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { quotationColors } from 'consts/quotationColors'
import { QuotationRequestState } from 'models/Quotation'
import { Link } from 'react-router-dom'
import { GetQuotationRequest } from 'shared/quotation'
import 'dayjs/locale/es'
import dayjs from 'dayjs'

dayjs.locale('es')

export const columns: ColumnsType<GetQuotationRequest> = [
  {
    title: 'Cliente',
    dataIndex: 'cliente',
    key: 1,
  },
  {
    title: 'Tipo Cliente',
    dataIndex: 'id_cliente',
    key: 2,
    render(clientId) {
      if (clientId) {
        return (
          <Tag color='green'>
            Registrado
          </Tag>
        )
      }

      return (
        <Tag color='red'>
          No registrado
        </Tag>
      )
    }
  },
  {
    title: 'Tipo Cotización',
    key: 3,
    render(_, record) {
      return record.id_servicio ? 'Servicio' : 'Compra'
    }
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 4,
    render(state: QuotationRequestState) {
      return (
        <Tag color={quotationColors[state]} className='capitalize'>
          {state}
        </Tag>
      )
    }
  },
  {
    title: 'Encargado',
    key: 5,
    render(_, record) {
      return record.nombre_asignado ? `${record.nombre_asignado} ${record.apellidos_asignado}` : 'Aún no asignado'
    }
  },
  {
    title: 'Fecha registro',
    key: 6,
    render(_, record) {
      return dayjs(record.fecha_registro).format('D MMMM YYYY, HH:mm:ss')
    }
  },
  {
    title: 'Fecha Atención',
    key: 7,
    render(_, record) {
      return record.fecha_atencion ?
        dayjs(record.fecha_atencion).format('D MMMM YYYY, HH:mm:ss') : 'Aún no atendido'
    }
  },
  {
    title: '',
    key: 8,
    render(_, request) {
      return (
        <Link to={`/dashboard/requests/${request.id}`}>
          <Button type='primary'>
            Detalle
          </Button>
        </Link>
      )
    }
  }

]