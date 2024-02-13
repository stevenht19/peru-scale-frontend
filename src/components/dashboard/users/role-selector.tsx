import { Select, SelectProps } from 'antd'
import { useRoles } from 'hooks/use-roles'
import { selectAdapter } from 'adapters/select-adapter'

type Props = SelectProps & {
  allowAll?: boolean
}

export const RoleSelector = (props: Props) => {
  const { roles } = useRoles()

  return (
    <Select
      options={
        props.allowAll ?
        [{label: 'Todos', value: 0 }, ...roles
          .map((rol) => selectAdapter(rol.id_rol, rol.nombre))] :
        roles
          .map((rol) => selectAdapter(rol.id_rol, rol.nombre))
      }
      {...props}
    />
  )
}
