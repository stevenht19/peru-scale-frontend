import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Routes } from 'consts/routes'
import { Button, Form, Input } from 'antd'
import { getRequiredRule } from 'utils/form'
import { useBoolean } from 'hooks/use-boolean'
import { auth } from 'services/auth'

type SubmitProps = {
  password: string
  password2: string
}

export function NewPasswordForm() {
  const location = useLocation()
  const navigate = useNavigate()
  const [loading, setLoading] = useBoolean()

  if (!location.search) {
    return <Navigate to={Routes.SIGNIN} />
  }

  const token = location.search.substring(7)

  const onFinish = (values: SubmitProps) => {
    setLoading.on()
    auth
      .recoverPassword(values.password, token)
      .then(() => {
        navigate(Routes.SIGNIN)
      })
  }

  return (
    <Form
      autoComplete="off"
      style={{ maxWidth: 600 }}
      layout="vertical"
      requiredMark={false}
      onFinish={onFinish}
    >
      <Form.Item label="Password" name="password" rules={getRequiredRule('Este campo')}>
        <Input size='large' />
      </Form.Item>
      <Form.Item
        label="Confirmar Password"
        name="password2"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Este campo es obligatorio'
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Los passwords deben ser iguales'))
            },
          }),
        ]}
      >
        <Input size='large' />
      </Form.Item>
      <Button
        size='large'
        type='primary'
        className='w-full'
        loading={loading}
        htmlType='submit'
      >
        Recuperar
      </Button>
    </Form>
  )
}
