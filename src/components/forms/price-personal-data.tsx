import { getRequiredRule } from 'utils/form'
import { Button, Form, Input, Select } from 'antd'
import { useSession } from 'hooks/use-session'
import { PreQuotedProduct } from 'models/Products'
import { ServiceQuotationRequest } from 'models/Quotation'
import { useForm } from 'antd/es/form/Form'
import { useBoolean } from 'hooks/use-boolean'
import { Service } from 'models/Services'
import TextArea from 'antd/es/input/TextArea'

interface PriceDataFormProps {
  selectedProducts?: PreQuotedProduct[]
  servicesForm?: boolean
  services?: Service[]
  onSubmit: (formData: ServiceQuotationRequest) => Promise<void>
}

export const PriceDataForm: React.FC<PriceDataFormProps> = ({
  selectedProducts,
  servicesForm,
  services,
  onSubmit
}) => {

  const { loading, user } = useSession()
  const [submitting, setSubmitting] = useBoolean()
  const [form] = useForm()

  const onFinish = async (values: ServiceQuotationRequest) => {
    setSubmitting.on()
    await onSubmit(values)
      .then(() => {
        form.resetFields()
      })
      .finally(() => {
        setSubmitting.off()
      })
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
            label='Nombres y Apellidos'
            name={'cliente'}
            rules={[
              ...getRequiredRule(),
              {
                pattern: /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/,
                message: 'Solo se admiten letras en este campo',
              },
            ]}
            {...user && { initialValue: user.nombres! + ' ' + user.apellidos! }}
          >
            {user ? (
              <Input
                size='large'
                defaultValue={user.nombres! + ' ' + user.apellidos!}
              />
            ) : (
              <Input size='large' />
            )}
          </Form.Item>
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
          {Boolean(servicesForm) && (
            <Form.Item
              label='Modelo de Balanza'
              name={'balanzaDescripcion'}
              rules={[...getRequiredRule('Modelo de balanza')]}
            >
              <Input size='large' />
            </Form.Item>
          )
          }
          {servicesForm && (
            <Form.Item
              label='Descripcion del servicio'
              name={'mensaje'}
            >
              <TextArea rows={4.5} style={{ resize: 'none' }} />
            </Form.Item>
          )}
        </div>
        <div className='col-md-6'>
          {Boolean(servicesForm) && (
            <Form.Item
              label='Servicio'
              name={'id_tipo_servicio'}
              rules={[...getRequiredRule('Un Tipo de servicio')]}
            >
              <Select
                placeholder='Seleccione un servicio'
                size='large'
                options={services?.map((service) => (
                  {
                    label: service.descripcion,
                    value: service.id
                  }
                ))}
              />
            </Form.Item>
          )
          }
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
            label='DNI'
            rules={[
              ...getRequiredRule('DNI'),
              {
                pattern: /^[0-9]{8}$/,
                message: 'Ingrese un DNI válido',
              },
            ]}
            {...user && {
              initialValue: user.dni!
            }}
            name={'dni'}
          >
            {user ?
              <Input size={'large'} defaultValue={user.dni!} /> :
              <Input size='large' />
            }
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
            loading={submitting}
            className='w-full mt-2'
            htmlType='submit'
            disabled={servicesForm ? false : !Boolean(selectedProducts?.length)}
          >
            Realizar solicitud
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default PriceDataForm;
