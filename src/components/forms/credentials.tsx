import { Button, Form, Input } from 'antd'
import { UserCredentials } from 'models/User'
import { getRequiredRule } from 'utils/form'
import { CredentialFormProps } from './types'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

export const CrendentialsForm = ({
  onNext,
  onSubmit,
  children,
  steps = false,
}: CredentialFormProps) => {

  const onFinish = async (values: UserCredentials) => {
    if (onNext) {
      onNext(values)
      return
    }

    onSubmit && await onSubmit(values).catch(() => console.log('cathc'))
  }

  return (
    <Form
      layout='vertical'
      className='mt-5'
      requiredMark={false}
      onFinish={onFinish}
      noValidate
    >
      <Form.Item
        label='Email'
        name={'correo'}
        rules={[
          {
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Ingrese un email válido',
          },
          ...getRequiredRule('Email')
        ]}
      >
        <Input size='large' />
      </Form.Item>
      <Form.Item
        label='Password'
        name={'password'}
        rules={[
          {
            min: 5,
            message: 'Password debe tener 5 letras como minimo'
          },
          ...getRequiredRule('Password')
        ]}
      >
        <Input.Password size='large' iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
      </Form.Item>
      {children}
      <Button
        size='large'
        type='primary'
        className='w-full mt-4'
        htmlType='submit'
      >
        {steps ? 'Siguiente' : 'Iniciar Sesión'}
      </Button>
    </Form>
  )

}