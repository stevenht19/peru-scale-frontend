import { User, UserCredentials } from 'models/User'
import { CredentialFormProps } from './types'
import { getRequiredRule } from 'utils/form'
import { Button, Checkbox, Form, Input } from 'antd'
import { useBoolean } from 'hooks/use-boolean'

export const PersonalDataForm = ({ onSubmit }: CredentialFormProps) => {
  const [loading, setLoading] = useBoolean()

  const onFinish = (values: Partial<User>) => {
    setLoading.on()

    onSubmit && onSubmit(values as UserCredentials)
      .finally(setLoading.off)
  }

  return (
    <Form
      layout='vertical'
      className='mt-5'
      requiredMark={false}
      onFinish={onFinish}
    >
      <Form.Item
        label='Nombres'
        name={'nombres'}
        rules={getRequiredRule()}
      >
        <Input size='large' />
      </Form.Item>
      <Form.Item
        label='Apellidos'
        name={'apellidos'}
        rules={getRequiredRule()}
      >
        <Input size='large' />
      </Form.Item>
      <Form.Item
        label='DNI'
        name={'dni'}
        rules={getRequiredRule('DNI')}
      >
        <Input size='large' />
      </Form.Item>
      <Form.Item
        label='Dirección'
        rules={getRequiredRule('Dirección')}
        name={'direccion'}
      >
        <Input size='large' />
      </Form.Item>
      <Form.Item
        label='Telefono'
        rules={getRequiredRule('Telefono')}
        name={'telefono'}
      >
        <Input size='large' />
      </Form.Item>
      <Form.Item
        name={'accept'}
        valuePropName='checked'
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Debe aceptar que la información es verdadera')),
          },
        ]}
      >
        <Checkbox
          style={{ lineHeight: '32px' }}
        >
          Acepto que la información proporcionada es verdadera y exacta.
        </Checkbox>
      </Form.Item>
      <Button
        size='large'
        loading={loading}
        className='w-full mt-4'
        htmlType='submit'
      >
        {loading ? 'Ingrensado...' : 'Crear cuenta'}
      </Button>
    </Form>
  )
}