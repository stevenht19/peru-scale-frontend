import { Navigate } from 'react-router-dom'
import { PersonalDataForm } from 'components/forms/personal-data'
import { AuthClientForm } from 'components/forms/auth-form'
import { Routes } from 'consts/routes'
import { useError } from 'hooks/use-error'
import { User } from 'models/User'
import { auth } from 'services/auth'
import { setToken } from 'utils/token'
import { ErrorText } from 'components/ui/error'

export default function VerifyAccount() {
  const { error, isError, handleErrorMsg } = useError()

  if (!location.search) {
    return <Navigate to={Routes.SIGNIN} />
  }

  const token = location.search.substring(7)

  const onSubmit = async (personalData: Partial<User>) => {
    try {
      const authRes = await auth.verifyAccount(personalData, token)
      if (authRes?.token) {
        setToken(authRes.token)
        window.location.href = '/'
      }

    } catch(e) {
      if (e instanceof Error) {
        handleErrorMsg(e.message)
      }
    }
  }

  return (
    <AuthClientForm
      title={'Verifica tu cuenta!'}
      linkText={'Inicia Sesión'}
      linkMessage={`Ya tienes una cuenta?`}
      linkPath={Routes.SIGNIN}
    >
      <PersonalDataForm onSubmit={onSubmit} />
      {isError && (
        <ErrorText>
          {error}
        </ErrorText>
      )}
    </AuthClientForm>
  )
}
