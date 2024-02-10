import { Select } from 'antd'

export const Filters = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className='flex items-start gap-3 mt-2'>
      <div className='mt-2 bg-blue-100/30 border-none px-2 py-0.5 text-xs rounded-md'>
        Total: 300
      </div>
      <div className='flex justify-end gap-3 flex-1'>
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
          style={{
            width: 130
          }}
        />
        {children}
      </div>
    </div>
  )
}
