import { ColumnsType } from 'antd/es/table'
import { roleColors } from 'consts/roles'
import { GetUser } from 'shared/user'
import { Tag } from 'antd'
import { UsersTableProps } from './users-table'
import { EditEmployee } from './edit-employee'
import { Roles } from 'models/Roles'
import 'dayjs/locale/es'
import dayjs from 'dayjs'

dayjs.locale('es')

type ColumnsProps = Partial<UsersTableProps> & {
  roles: Roles[]
}

export const columns = ({ onEditUser, roles }: ColumnsProps): ColumnsType<GetUser> => [
  {
    title: 'Nombre Completo',
    fixed: true,
    key: 1,
    width: 240,
    render(_, record) {
      return `${record.nombres} ${record.apellidos}`
    }
  },
  {
    title: 'Correo',
    dataIndex: 'correo',
    key: 2,
    width: 240

  },
  {
    title: 'Rol',
    dataIndex: 'id_rol',
    key: 4,
    width: 100,
    render(id_rol: number, record) {
      return (
        <Tag color={roleColors[record.nombre_rol]}>
          {roles?.find(rol => rol.id_rol === id_rol)?.nombre}
        </Tag>
      )
    }
  },
  {
    title: 'Dirección',
    dataIndex: 'direccion',
    key: 3,
    width: 240
  },
  {
    title: 'Telefono',
    dataIndex: 'telefono',
    width: 240,
  },
  {
    title: 'Fecha de registro',
    dataIndex: 'fecha_registro',
    key: 5,
    width: 240,
    render(date) {
      return dayjs(date).format('D MMMM YYYY, HH:mm:ss')
    }
  },
  {
    title: 'Usuario Registro',
    dataIndex: 'usuario_actualizacion',
    key: 5,
    width: 155,
    render(user) {
      return user ?? '-'
    }
  },
  {
    title: 'Ultima Actualización',
    dataIndex: 'fecha_actualizacion',
    key: 5,
    width: 240,
    render(date) {
      return dayjs(date).format('D MMMM YYYY, HH:mm:ss')
    }
  },
  {
    title: 'Usuario Actualización',
    dataIndex: 'usuario_actualizacion',
    key: 5,
    width: 170,
    render(user) {
      return user ?? '-'
    }
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 6,
    width: 100,
    render(state) {
      if (state === 'activo') {
        return (
          <Tag color='green'>
            {state}
          </Tag>
        )
      }

      return (
        <Tag color='red'>
          {state}
        </Tag>
      )
    }
  },
  {
    key: 7,
    fixed: 'right',
    width: 100,
    render(_, record) {
      return <EditEmployee user={record} onEditUser={onEditUser!} />
    }
  }
]