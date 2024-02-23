import { Button, Form, Input, message } from 'antd'
import { editServicePrice } from 'services/quotation'
import { OptionalServiceQuotationRequest } from 'shared/quotation'
import { getRequiredRule } from 'utils/form'

type Props = Partial<OptionalServiceQuotationRequest> & {
  reload(): void
}

export const EditServicePrice = ({ id, precio, reload }: Props) => {
  const onSubmit = async (values: { price: number }) => {
    await editServicePrice(values.price, id!)
    reload()
    message.success('Precio editado correctamente')
  }

  return (
    <Form
      layout='vertical'
      className='my-4 max-w-[15rem]'
      onFinish={onSubmit}
    >
      <Form.Item
        label='Asigna un precio al servicio'
        name={'price'}
        rules={getRequiredRule('Precio')}
      >
        <Input size='large' addonBefore={'S/.'} type='number' defaultValue={precio} />
      </Form.Item>
      <Button htmlType='submit'>
        Guardar
      </Button>
    </Form>
  )
}
