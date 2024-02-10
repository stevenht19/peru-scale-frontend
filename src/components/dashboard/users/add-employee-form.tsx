import { Form, Input, Select } from 'antd'

export const AddEmployeeForm = () => {
  return (
    <Form layout='vertical' className='mt-4'>
      <div className='grid grid-cols-2 gap-3'>
        <div>
          <Form.Item
            label='Nombres'
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Correo'
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='DNI'
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Dirección'
          >
            <Input />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            label='Apellidos'
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Password'
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Telefono'
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Rol'
          >
            <Select />
          </Form.Item>
        </div>
      </div>
    </Form>
  )
}
