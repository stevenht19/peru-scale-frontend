import { Form, Input, Modal } from 'antd'
import { useBoolean } from 'hooks/use-boolean'
import { UserCredentials } from 'models/User'
import toast, { Toaster } from 'react-hot-toast'
import { auth } from 'services/auth'

type SubmitProps = {
  correo: UserCredentials['correo']
}

const notify = () => toast('Se solicito recuperar contraseña')

export const RecoverPassword: React.FC = () => {
  const [open, setOpen] = useBoolean()
  const [loading, setLoading] = useBoolean()
  const [form] = Form.useForm()

  const onOk = () => {
    form.submit()
  }

  const onSubmit = (values: SubmitProps) => {
    setLoading.on()
    auth.recoverPasswordByEmail(values.correo)
      .finally(() => {
        setLoading.off()
        notify()
        setOpen.off()
      })
  }

  return (
    <>
      <div className='flex justify-end'>
        <button type='button' className='underline text-blue-500' onClick={setOpen.on}>
          Olvidaste tu contraseña?
        </button>
      </div>
      <Toaster />
      <Modal
        title='Recuperar Contraseña'
        open={open}
        cancelText='Cancelar'
        okText='Enviar Correo'
        onCancel={setOpen.off}
        okButtonProps={{
          loading
        }}
        onOk={onOk}
      >
        <div className='mt-4'>

        </div>
        <p>
          Le enviaremos un correo donde puede modificar su contrasena actual, por favor ingrese su correo electronico
        </p>
        <Form layout='vertical' form={form} onFinish={onSubmit}>
          <Form.Item
            name={'correo'}
            className='mt-4'
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}