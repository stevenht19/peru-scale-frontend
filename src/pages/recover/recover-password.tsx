import { AuthClientForm } from 'components/forms/auth-form'
import { NewPasswordForm } from 'components/forms/new-password'
import { Routes } from 'consts/routes'

export default function RecoverPassword() {
  return (
    <AuthClientForm
      title='Recuperar Cuenta'
      linkText={'Volver al Login'}
      linkMessage={''}
      linkPath={Routes.SIGNIN}
    >
      <div className='mt-5'>
        <NewPasswordForm />
      </div>
    </AuthClientForm>
  )
}
