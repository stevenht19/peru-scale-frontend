import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { UserCredentials } from 'models/User'
import { getRequiredRule } from 'utils/form'
import { CredentialFormProps } from './types'
import { useBoolean } from 'hooks/use-boolean'
import { useError } from 'hooks/use-error'
import { ErrorText } from 'components/ui/error'

export const CrendentialsForm = ({
  onNext,
  onSubmit,
  children,
  submitText,
  withConfirmPassword = false,
  
}: CredentialFormProps) => {
  const { error, isError, handleErrorMsg, resetError } = useError()
  const [submitting, setIsSubmitting] = useBoolean()

  const onFinish = async (values: UserCredentials) => {
    if (onNext) {
      onNext(values)
      return
    }

    setIsSubmitting.on()

    onSubmit && await onSubmit(values)
      .then(() => {
        resetError()
      })
      .catch((e) => {
        handleErrorMsg(e.message)
      })
      .finally(setIsSubmitting.off)
  }

  return (
    <Form
      layout='vertical'
      className='mt-4'
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
          {
            pattern: /^(?=.*[A-Z])(?=.*\d)/,
            message: 'Debe contener al menos 1 mayúscula y 1 número',
          },
          ...getRequiredRule('Password')
        ]}
      >
        <Input.Password
          size='large'
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>
      {
        Boolean(withConfirmPassword) && (
          <Form.Item
            label="Confirmar Password"
            name="password2"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Este campo es obligatorio'
              },
              {
                min: 5,
                message: 'Password debe tener 5 letras como minimo'
              },
              {
                pattern: /^(?=.*[A-Z])(?=.*\d)/,
                message: 'Debe contener al menos 1 mayúscula y 1 número',
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
            <Input.Password size='large' />
          </Form.Item>
        )
      }
      {children}
      <Button
        loading={submitting}
        size='large'
        type='primary'
        className='w-full mt-4'
        htmlType='submit'
      >
        {submitText ?? 'Iniciar Sesión'}
      </Button>
      {isError && (
        <ErrorText>
          {error}
        </ErrorText>
      )}
    </Form>
  )
}