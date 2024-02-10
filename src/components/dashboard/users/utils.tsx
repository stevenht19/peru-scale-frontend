import { ColumnsType } from 'antd/es/table'
import { ROLES, roleColors } from 'consts/roles'
import { GetUser } from 'shared/user'
import 'dayjs/locale/es'
import dayjs from 'dayjs'
import { Tag } from 'antd'

dayjs.locale('es');

export const columns: ColumnsType<GetUser> = [
  {
    title: 'Nombre Completo',
    dataIndex: 'nombre_completo',
    key: 1
  },
  {
    title: 'Correo',
    dataIndex: 'correo',
    key: 2
  },
  {
    title: 'Dirección',
    dataIndex: 'direccion',
    key: 3
  },
  {
    title: 'Telefono',
    dataIndex: 'telefono'
  },
  {
    title: 'Rol',
    dataIndex: 'nombre_rol',
    key: 4,
    render(rol: ROLES) {
      return (
        <Tag color={roleColors[rol]}>
          {rol}
        </Tag>
      )
    }
  },
  {
    title: 'Fecha de registro',
    dataIndex: 'fecha_registro',
    key: 5,
    render(date) {
      return dayjs(date).format('D MMMM YYYY, HH:mm:ss')
    }
  }
]