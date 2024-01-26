import { Steps } from 'antd'
import { AuthClientForm } from 'components/forms/auth-form'
import { CrendentialsForm } from 'components/forms/credentials'
import { PersonalDataForm } from 'components/forms/personal-data'
import { Routes } from 'consts/routes'
import { User } from 'models/User'
import { useState } from 'react'
import { auth } from 'services/auth'

export default function Signup() {
  const [step, setStep] = useState<number>(0)
  const [userToRegister, setUserToRegister] = useState<Partial<User>>({})

  const onNext = (values: Partial<User>) => {
    setStep(step => step + 1)
    setUserToRegister(values)
  }

  const onSubmit = async (values: Partial<User>) => {
    await auth.signup({
      ...values,
      ...userToRegister
    } as User)

    window.location.href = '/'
  }

  const steps = [
    {
      title: 'Credenciales',
      content: <CrendentialsForm onNext={onNext} steps />,
    },
    {
      title: 'Información Personal',
      content: <PersonalDataForm onSubmit={onSubmit} />
    }
  ]

  const items = steps.map((item) => ({ key: item.title, title: item.title }))

  return (
    <AuthClientForm
      title={'Crea una cuenta'}
      linkText={'Inicia Sesión'}
      linkMessage={'Ya tienes una cuenta?'}
      linkPath={Routes.SIGNIN}
    >
      <Steps
        size='small'
        className='my-8'
        current={step}
        items={items}
      />
      <div>
        {steps[step].content}
      </div>
    </AuthClientForm>
  )
}
