import { selectAdapter } from 'adapters/select-adapter'
import { Button, Form, Input, Modal, Select } from 'antd'
import { ErrorText } from 'components/ui/error'
import { useRoles } from 'hooks/use-roles'
import { CreateUser } from 'shared/user'
import { EmployeeStateSelector } from './employee-state-selector'

type EmployeeFormProps = {
  user?: CreateUser
  open: boolean
  title: string
  error: string
  isError: boolean
  loading: boolean
  onCancel(): void
  onFinish(user: Partial<CreateUser>): Promise<void>
}

export const EmployeeForm = ({
  title,
  user,
  open,
  error,
  isError,
  onFinish,
  onCancel,
  loading
}: EmployeeFormProps) => {
  const { roles } = useRoles()

  return (
    <Modal
      title={title}
      open={open}
      onCancel={onCancel}
      width={650}
      footer={null}
    >
      <Form layout='vertical' className='mt-4' onFinish={onFinish}>
        <div className='grid grid-cols-2 gap-3'>
          <div>
            <Form.Item
              label='Nombres'
              name={'nombres'}
              initialValue={user?.nombres ?? ''}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Correo'
              name={'correo'}
              initialValue={user?.correo ?? ''}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='DNI'
              name={'dni'}
              initialValue={user?.dni ?? ''}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Dirección'
              name={'direccion'}
              initialValue={user?.direccion ?? ''}
            >
              <Input />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label='Apellidos'
              name={'apellidos'}
              initialValue={user?.apellidos ?? ''}
            >
              <Input />
            </Form.Item>
            {
              !user && (
                <Form.Item
                  label='Password'
                  name={'password'}
                >
                  <Input />
                </Form.Item>
              )
            }
            <Form.Item
              label='Telefono'
              name={'telefono'}
              initialValue={user?.telefono ?? ''}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Rol'
              name={'id_rol'}
              {...user?.id_rol && { initialValue: user.id_rol }}
            >
              <Select
                options={
                  roles
                    .map((rol) => selectAdapter(rol.id_rol, rol.nombre))
                }
              />
            </Form.Item>
            {user && (
              <Form.Item
                label='Estado'
                name={'estado'}
                initialValue={user.estado}
              >
                <EmployeeStateSelector style={{ width: '100%' }} />
              </Form.Item>
            )}
          </div>
        </div>
        <div className='mt-3 flex justify-end'>
          <Button htmlType='submit' type='primary' loading={loading}>
            {!loading ? 'Guardar usuario' : 'Guardando...'}
          </Button>
        </div>
        {isError && (
          <div className='mt-3'>
            <ErrorText>
              {error}
            </ErrorText>
          </div>
        )}
      </Form>
    </Modal>
  )
}
