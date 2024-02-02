import { getRequiredRule } from 'utils/form';
import { Button, Form, Input, Select } from 'antd';
import { useSession } from 'hooks/use-session';

interface PriceDataFormProps {
  onSubmit: (formData: FormData) => void;
}

export const PriceDataForm: React.FC<PriceDataFormProps> = ({ onSubmit }) => {
  const { loading, user } = useSession()

  const onFinish = (values: FormData) => {
    onSubmit(values);
  };

  if (loading) return null

  return (
    <Form
      layout='vertical'
      className='mt-3'
      requiredMark={false}
      onFinish={onFinish}
    >
      <div className='row'>
        <div className='col-md-6'>
          <Form.Item
            label='Nombres y Apellidos'
            name={'nombres'}
            rules={getRequiredRule()}
            {...user && { initialValue: user.nombres! + ' ' + user.apellidos! }}
          >
            {user ? (
              <Input size='large' defaultValue={user.nombres! + ' ' + user.apellidos!} />
            ) : (
              <Input size='large' />
            )}
          </Form.Item>
          <Form.Item
            label='Correo electrónico'
            name={'correo'}
            rules={getRequiredRule()}
            {...user && { initialValue: user.correo }}
          >
            {user ? (
              <Input size='large' defaultValue={user?.correo} />
            ) : (
              <Input size='large' />
            )}
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
        </div>
        <div className='col-md-6'>
          <Form.Item
            label='Medio de Pago'
            name={'medioDePago'}
            rules={getRequiredRule('Un Medio De Pago')}
            initialValue={'tarjeta'}
          >
            <Select
              size='large'
              options={[
                {
                  value: 'yape',
                  label: 'Yape'
                },
                {
                  value: 'tarjeta',
                  label: 'Tarjeta'
                }
              ]}
            />
          </Form.Item>
          <Form.Item
            label='Telefono'
            rules={getRequiredRule('Telefono')}
            {...user && { initialValue: user.telefono! }}
            name={'telefono'}
          >
            {user ?
              <Input size='large' defaultValue={user.telefono!} /> :
              <Input size='large' />
            }
          </Form.Item>
          <Form.Item
            label='DNI'
            rules={getRequiredRule('DNI')}
            {...user && { initialValue: user.dni! }}
            name={'dni'}
          >
            {user ? <Input size={'large'} defaultValue={user.dni!} /> : <Input size='large' />}
          </Form.Item>
          <Form.Item
            label='Nombre de la Empresa'
            rules={getRequiredRule('Empresa')}
            name={'empresa'}
          >
            <Input size='large' />
          </Form.Item>

          <Button
            size='large'
            type='primary'
            //loading={loading}
            className='w-full mt-2'
            htmlType='submit'
          >
            Realizar solicitud
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default PriceDataForm;
