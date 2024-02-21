import { getRequiredRule } from 'utils/form'
import { CreateUser } from "shared/user";
import { Button, Form, Input} from 'antd'
import { useSession } from 'hooks/use-session'


type UserFormProps = {
  user1?: CreateUser;
  onFinish(user: Partial<CreateUser>): Promise<void>;
};


export const EditDataForm = ({ 
  user1, 
  onFinish
 }: UserFormProps) => {

  const {  user } = useSession();

  
  return (
    <Form
      layout='vertical'
      className='my-3'
      requiredMark={false}
      onFinish={onFinish}
      initialValues={user1}
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
            initialValue={user?.nombres ?? ''}
          >
            
              <Input/>
            
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
            initialValue={user?.apellidos ?? ''}
          >
            <Input/>
            
          </Form.Item>
          <Form.Item
            label='DNI'
            name={'dni'}
             rules={[
              
            ...getRequiredRule('DNI'),
          {
            pattern: /^[0-9]{8}$/,
            message: 'Ingrese un DNI válido',
            
          },
        ]}
        initialValue={user?.dni ?? ''}
      >
         <Input disabled/> 
            
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
            initialValue={user?.correo ?? ''}
          >
            <Input disabled/>
            
          </Form.Item>
          <Form.Item
            label='Telefono'
            name={'telefono'}
            rules={[
              ...getRequiredRule('Telefono'),
              {
                pattern: /^[0-9]{1,9}$/,
                message: 'Ingrese un número de teléfono válido',
              },
            ]}
            initialValue={user?.telefono ?? ''}
          >
            <Input/>
            
          </Form.Item>
          <Form.Item
            label='Dirección'
            rules={getRequiredRule('Direccion')}
            name={'direccion'}
            initialValue={user?.direccion ?? ''}
          >
            <Input />
            
          </Form.Item>

          <Button
            
            size='large'
            type='primary'
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
