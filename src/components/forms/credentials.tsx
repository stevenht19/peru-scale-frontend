import { Button, Form, Input } from 'antd'
import { UserCredentials } from 'models/User'
import { getRequiredRule } from 'utils/form'
import { CredentialFormProps } from './types'

export const CrendentialsForm = ({ onNext, onSubmit, steps = false }: CredentialFormProps) => {

  const onFinish = (values: UserCredentials) => {
    
    if (onNext) {
      onNext(values)
      return
    }

    onSubmit && onSubmit(values)
  }

  return (
    <Form
      layout='vertical'
      className='mt-5'
      requiredMark={false}
      onFinish={onFinish}
    >
      <Form.Item label='Email' rules={getRequiredRule('Email')} name={'correo'}>
        <Input size='large' />
      </Form.Item>
      <Form.Item
        label='Password'
        name={'password'}
        rules={getRequiredRule('Password')}
      >
        <Input size='large' type='password' />
      </Form.Item>
      <Button
        size='large'
        className='w-full mt-4'
        htmlType='submit'
      >
        {steps ? 'Siguiente' : 'Iniciar Sesión'}
      </Button>
    </Form>
  )

}