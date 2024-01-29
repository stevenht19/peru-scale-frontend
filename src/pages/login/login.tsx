import { Routes } from 'consts/routes'
import { auth } from 'services/auth'
import { useError } from 'hooks/use-error'
import { UserCredentials } from 'models/User'
import { AuthClientForm } from 'components/forms/auth-form'
import { CrendentialsForm } from 'components/forms/credentials'
import { RecoverPassword } from 'components/forms/recover-password-byemail'

export default function Login() {

  const { error, isError, handleErrorMsg } = useError()

  const onSubmit = async (crendetials: UserCredentials) => {
    auth.login(crendetials)
      .then((res) => {
        if (!res.message) {
          window.location.href = '/'
        }
      }).catch(() => {
        handleErrorMsg('Credenciales incorrectas')
      })
  }

  return (
    <AuthClientForm
      title='Iniciar Sesión'
      linkPath={Routes.SIGNUP}
      linkMessage='Aún no tienes una cuenta?'
      linkText='Registrate'
    >
      <CrendentialsForm onSubmit={onSubmit}>
        <RecoverPassword />
      </CrendentialsForm>
      {isError && (
        <p className='text-[#ff4d4f] text-center text-sm mt-[.3rem]'>{error}</p>
      )}
    </AuthClientForm>
  )
}
