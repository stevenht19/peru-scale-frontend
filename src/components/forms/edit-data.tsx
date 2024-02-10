import { getRequiredRule } from 'utils/form'
import { Button, Form, Input} from 'antd'
import { CredentialFormProps } from './types'
import { User, UserCredentials } from 'models/User'
import { useForm } from 'antd/es/form/Form'
import { useSession } from 'hooks/use-session'
import { useBoolean } from 'hooks/use-boolean'


export const EditDataForm = ({
    onSubmit }: CredentialFormProps) => {
    const [loading, setLoading] = useBoolean()
    const [submitting] = useBoolean()
    const {  user } = useSession()
    const [form] = useForm()
      
        const onFinish = (values: Partial<User>) => {
            try{
                setLoading.on()
            }catch(error){
                console.error('Error al actualizar los datos del usuario', error);
            }finally{
                onSubmit && onSubmit(values as UserCredentials)
              .finally(setLoading.off)
            }
          }
  
    if (loading) return null
  
  return (
    <Form
      form={form}
      layout='vertical'
      className='my-3'
      requiredMark={false}
      onFinish={onFinish}
    >
      <div className='row'>
        <div className='col-md-6'>
          <Form.Item
            label='Nombres'
            name={'cliente'}
            rules={[
              ...getRequiredRule(),
              {
                pattern: /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/,
                message: 'Solo se admiten letras en este campo',
              },
            ]}
            {...user && { initialValue: user.nombres!  }}
          >
            {user ? (
              <Input
                size='large'
                defaultValue={user.nombres! }
              />
            ) : (
              <Input size='large' />
            )}
          </Form.Item>
          <Form.Item
            label='Apellidos'
            name={'clienteap'}
            rules={[
              ...getRequiredRule(),
              {
                pattern: /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/,
                message: 'Solo se admiten letras en este campo',
              },
            ]}
            {...user && { initialValue:  user.apellidos! }}
          >
            {user ? (
              <Input
                size='large'
                defaultValue={ user.apellidos!}
              />
            ) : (
              <Input size='large' />
            )}
          </Form.Item>
          <Form.Item
            label='DNI'
             rules={[
            ...getRequiredRule('DNI'),
          {
            pattern: /^[0-9]{8}$/,
            message: 'Ingrese un DNI válido',
          },
        ]}
        {...user && { initialValue: user.dni! }}
            name={'dni'}
      >
         {user ?
            <Input 
            size='large' 
            defaultValue={user.dni!} 
            readOnly /> : 
            <Input size='large' />
            }
      </Form.Item>
          
        </div>
        <div className='col-md-6'>
        <Form.Item
            label='Correo electrónico'
            name={'correo'}
            rules={[
              {
                pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: 'Ingrese un correo electrónico válido',
              },
              ...getRequiredRule('Correo electrónico'),
            ]}
            {...user && { initialValue: user.correo }}
          >
            {user ? (
              <Input size='large' defaultValue={user?.correo} />
            ) : (
              <Input size='large' />
            )}
          </Form.Item>
          <Form.Item
            label='Telefono'
            rules={[
              ...getRequiredRule('Telefono'),
              {
                pattern: /^[0-9]{1,9}$/,
                message: 'Ingrese un número de teléfono válido',
              },
            ]}
            {...user && { initialValue: user.telefono! }}
            name={'telefono'}
          >
            {user ?
              <Input size='large' defaultValue={user.telefono!} /> :
              <Input size='large' />
            }
          </Form.Item>
          <Form.Item
            label='Dirección'
            rules={getRequiredRule('Direccion')}
            name={'direccion'}
            {...user && { initialValue: user.direccion }}
          >
            {user ? (
              <Input size='large' defaultValue={user.direccion!} />
            ) : (
              <Input size='large' />
            )}
          </Form.Item>

          <Button
            size='large'
            type='primary'
            loading={submitting}
            className='w-full mt-2'
            htmlType='submit'
          >
            Guardar cambios
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default EditDataForm;
