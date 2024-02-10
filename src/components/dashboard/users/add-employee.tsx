import { Button } from 'antd'
import { useBoolean } from 'hooks/use-boolean'
import { EmployeeForm } from './employee-form'
import { CreateUser } from 'shared/user'
import { useError } from 'hooks/use-error'

type AddEmployeeProps = {
  onCreateUser(user: CreateUser): Promise<void>
}

export const AddEmployee: React.FC<AddEmployeeProps> = ({
  onCreateUser
}) => {
  const [open, setOpen] = useBoolean()
  const { handleErrorMsg, error, isError } = useError()

  const onSubmit = async (user: CreateUser) => {
    try {
      await onCreateUser(user)
    } catch (e) {
      if (e instanceof Error)
        handleErrorMsg(e.message)
    }
  }

  return (
    <>
      <Button type='primary' onClick={setOpen.on}>
        Agregar Empleado
      </Button>
      <EmployeeForm
        title='Agregar un empleado'
        onCancel={setOpen.off}
        open={open}
        onFinish={onSubmit}
        isError={isError}
        error={error}
      />
    </>
  )
}
