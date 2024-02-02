import { getRequiredRule } from 'utils/form';
import { Button, Dropdown, Form, Input } from 'antd';

interface PriceDataFormProps {
  onSubmit: (formData: FormData) => void;
}

export const PriceDataForm: React.FC<PriceDataFormProps> = ({ onSubmit }) => {
  const onFinish = (values: FormData) => {
    onSubmit(values);
  };

  return (
    <Form
      layout='vertical'
      className='mt-5'
      requiredMark={false}
      onFinish={onFinish}
    >
      <div className='row'>
        <div className='col-md-6'>
          <Form.Item
            label='Nombres y Apellidos'
            name={'nombres'}
            rules={getRequiredRule()}
          >
            <Input size='large' />
          </Form.Item>
          <Form.Item
            label='Correo electrónico'
            name={'correo'}
            rules={getRequiredRule()}
          >
            <Input size='large' />
          </Form.Item>
          <Form.Item
            label='Dirección'
            rules={getRequiredRule('Direccion')}
            name={'direccion'}
          >
            <Input size='large' />
          </Form.Item>
        </div>
        <div className='col-md-6'>
          <Form.Item
            label='Medio de Pago'
            name={'medioDePago'}
            rules={getRequiredRule('MedioDePago')}
          >
            
          </Form.Item>
          <Form.Item
            label='Telefono'
            rules={getRequiredRule('Telefono')}
            name={'telefono'}
          >
            <Input size='large' />
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
