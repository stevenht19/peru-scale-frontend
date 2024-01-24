import { Button, Checkbox, Form, Input, Steps } from 'antd'
import { Routes } from 'consts/routes'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getRequiredRule } from 'utils/form'

export default function Signup() {
  const [step, setStep] = useState<number>(0)

  const onNext = () => {
    setStep(step => step + 1)
  }

  const steps = [
    {
      title: 'Credentials',
      content: <CrendentialsForm onNext={onNext} />,
    },
    {
      title: 'Personal Data',
      content: <PersonalDataForm />
    }
  ]

  const items = steps.map((item) => ({ key: item.title, title: item.title }))

  return (
    <div className='max-w-xl mx-auto mt-7'>
      <h2 className='text-3xl font-bold'>Registra una cuenta</h2>
      <p className='mt-2'>
        Ya tienes una cuenta? <Link to={Routes.SINGIN} className='text-blue-500 underline'>Inicia Sesión</Link>
      </p>
      <Steps
        size='small'
        className='my-8'
        current={step}
        items={items}
      />
      <div>
        {steps[step].content}
      </div>
    </div>
  )
}

const CrendentialsForm = ({ onNext = () => { } }) => {

  const onFinish = () => {
    onNext()
  }

  return (
    <Form
      layout='vertical'
      className='mt-5'
      requiredMark={false}
      onFinish={onFinish}
    >
      <Form.Item label='Email' rules={getRequiredRule('Email')} name={'email'}>
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
        Siguiente
      </Button>
    </Form>
  )

}

const PersonalDataForm = () => {

  const onFinish = () => {
    console.log('login')
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
        className='w-full mt-4'
        htmlType='submit'
      >
        Crear cuenta
      </Button>
    </Form>
  )
}