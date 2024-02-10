import { ColumnsType } from 'antd/es/table'
import { ROLES, roleColors } from 'consts/roles'
import { GetUser } from 'shared/user'
import { Button, Tag } from 'antd'
import 'dayjs/locale/es'
import dayjs from 'dayjs'

dayjs.locale('es')

export const columns: ColumnsType<GetUser> = [
  {
    title: 'Nombre Completo',
    dataIndex: 'nombre_completo',
    fixed: true,
    key: 1,
    width: 240
  },
  {
    title: 'Correo',
    dataIndex: 'correo',
    key: 2,
    width: 240

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
    title: 'Rol',
    dataIndex: 'nombre_rol',
    key: 4,
    width: 100,
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
    render(_) {
      return (
        <div>
          <Button>
            Editar
          </Button>
        </div>
      )
    }
  }
]