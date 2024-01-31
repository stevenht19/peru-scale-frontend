import { User, UserCredentials } from 'models/User'

export type CredentialFormProps = {
  steps?: boolean
  children?: React.ReactNode
  onNext?: (user: Partial<User>) => void
  onSubmit?: (crendetials: UserCredentials) => Promise<void>
}