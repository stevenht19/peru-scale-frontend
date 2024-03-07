import { AuthClientForm } from 'components/forms/auth-form'
import { CrendentialsForm } from 'components/forms/credentials'
import { Routes } from 'consts/routes'
import { UserCredentials } from 'models/User'
import toast from 'react-hot-toast'
import { auth } from 'services/auth'

export default function Signup() {
  const onSubmit = async (values: UserCredentials) => {
    const res = await auth.signup(values)
    
    if (res?.token) {
      toast.success('Te hemos enviado un correo de confirmación a la dirección de correo electrónico')
    }
  }

  return (
    <AuthClientForm
      title={'Crea una cuenta'}
      linkText={'Inicia Sesión'}
      linkMessage={`Ya tienes una cuenta?`}
      linkPath={Routes.SIGNIN}
    >
      <CrendentialsForm
        onSubmit={onSubmit}
        withConfirmPassword={true}
        submitText='Registrarse'
      />
    </AuthClientForm>
  )
}
