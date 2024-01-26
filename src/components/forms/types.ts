import { User, UserCredentials } from 'models/User'

export type CredentialFormProps = {
  steps?: boolean
  onNext?: (user: Partial<User>) => void
  onSubmit?: (crendetials: UserCredentials) => Promise<void>
}