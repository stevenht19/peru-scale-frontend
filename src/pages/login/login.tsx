import { AuthClientForm } from 'components/forms/auth-form'
import { CrendentialsForm } from 'components/forms/credentials'
import { Routes } from 'consts/routes'
import { UserCredentials } from 'models/User'
import { auth } from 'services/auth'

export default function Login() {

  const onSubmit = async (crendetials: UserCredentials) => {
    try {
      await auth.login(crendetials)
      window.location.href = '/'
    } catch(_) { /* empty */ }
  }

  return (
    <AuthClientForm
      title='Iniciar Sesión'
      linkPath={Routes.SIGNUP}
      linkMessage='Aún no tienes una cuenta?'
      linkText='Registrate'
    >
      <CrendentialsForm onSubmit={onSubmit} />
    </AuthClientForm>
  )
}
