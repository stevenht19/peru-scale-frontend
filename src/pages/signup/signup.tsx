import { Steps } from 'antd'
import { AuthClientForm } from 'components/forms/auth-form'
import { CrendentialsForm } from 'components/forms/credentials'
import { PersonalDataForm } from 'components/forms/personal-data'
import { Routes } from 'consts/routes'
import { useError } from 'hooks/use-error'
import { User } from 'models/User'
import { useState } from 'react'
import { auth } from 'services/auth'

export default function Signup() {
  const { error, isError, handleErrorMsg, resetError } = useError()

  const [step, setStep] = useState<number>(0)
  const [userToRegister, setUserToRegister] = useState<Partial<User>>({})

  const onNext = (values: Partial<User>) => {
    setStep(step => step + 1)
    setUserToRegister(values)
    resetError()
  }

  const handleChangeStep = (value: number) => {
    if ((step === 1 && value === 0)) {
      setStep(value)
    }
  }

  const onSubmit = async (values: Partial<User>) => {
    await auth.signup({
      ...values,
      ...userToRegister
    } as User).then((res) => {
      if (res) {
        window.location.href = '/'
      }
    }).catch((e) => {
      handleErrorMsg(e.message)
    })

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
      linkMessage={`Ya tienes una cuenta?`}
      linkPath={Routes.SIGNIN}
    >
      <Steps
        size='small'
        className='my-8'
        current={step}
        items={items}
        onChange={handleChangeStep}
      />
      {steps.map((stp, index) => (
        <div style={{ display: index === step ? 'block' : 'none' }}>
          {stp.content}
        </div>
      ))}
      {isError && (
        <p className='text-[#ff4d4f] text-center text-sm mt-[.3rem]'>{error}</p>
      )}
    </AuthClientForm>
  )
}
