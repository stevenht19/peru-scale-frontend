import { PlusOutlined } from '@ant-design/icons'
import { Button, Modal } from 'antd'
import { useBoolean } from 'hooks/use-boolean'
import { AddEmployeeForm } from './add-employee-form'

export const AddEmployee: React.FC = () => {
  const [open, setOpen] = useBoolean()

  return (
    <>
      <Button type='primary' icon={<PlusOutlined />} onClick={setOpen.on}>
        Agregar Empleado
      </Button>
      <Modal
        title='Agregar un empleado'
        open={open}
        onCancel={setOpen.off}
        width={650}
      >
        <AddEmployeeForm />
      </Modal>
    </>
  )
}
