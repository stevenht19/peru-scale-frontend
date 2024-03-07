import { Select, SelectProps } from 'antd'

export const EmployeeStateSelector = (props: SelectProps) => {
  return (
    <Select
      defaultValue={'activo'}
      options={[
        {
          label: 'Activo',
          value: 'activo'
        },
        {
          label: 'Inactivo',
          value: 'inactivo'
        }
      ]}
      {...props}
    />
  )
}
