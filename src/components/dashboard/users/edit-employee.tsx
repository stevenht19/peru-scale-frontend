import { Button, ButtonProps } from 'antd'
import { useBoolean } from 'hooks/use-boolean'
import { EmployeeForm } from './employee-form'
import { CreateUser } from 'shared/user'
import { useError } from 'hooks/use-error'

type EditEmployeeProps = {
  user: CreateUser
  buttonType?: ButtonProps['type']
  onEditUser(user: CreateUser): Promise<void>
}

export const EditEmployee: React.FC<EditEmployeeProps> = ({
  user,
  buttonType,
  onEditUser
}) => {
  const [open, setOpen] = useBoolean()
  const [loading, setLoading] = useBoolean()
  const { error, isError, handleErrorMsg } = useError()

  const onSubmit = async (editedUser: CreateUser) => {
    try {
      setLoading.on()
      await onEditUser({ ...editedUser, id: user.id })
      setOpen.off()
      setLoading.on()
    } catch(e) {
      if (e instanceof Error)
      handleErrorMsg(e.message)
      setLoading.off()
    }
  }

  return (
    <div>
      <Button onClick={setOpen.on} type={buttonType ?? 'default'}>
        Editar
      </Button>
      <EmployeeForm
        title='Editar un empleado'
        open={open}
        loading={loading}
        onFinish={onSubmit}
        onCancel={setOpen.off}
        isError={isError}
        error={error}
        user={user}
      />
    </div>
  )
}
