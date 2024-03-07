import { User, UserCredentials } from 'models/User'

export type CredentialFormProps = {
  children?: React.ReactNode
  withConfirmPassword?: boolean
  submitText?: string
  onNext?: (user: Partial<User>) => void
  onSubmit?: (crendetials: UserCredentials) => Promise<void>
}
