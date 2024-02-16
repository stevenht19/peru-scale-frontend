import { Form, Input } from 'antd'
import { ClientDetail } from 'components/dashboard/requests/client-detail'
import { ServiceDetail } from 'components/dashboard/requests/service-detail'
import { useRequestDetail } from 'hooks/use-request-detail'
import { useParams } from 'react-router-dom'

export const TaskDetail = () => {
  const params = useParams()
  const { request } = useRequestDetail(Number(params.id))

  if (!request) return null

  return (
    <div className='border-l p-4 h-screen'>
      <ClientDetail {...request!} />
      {request?.id_servicio && <ServiceDetail {...request} />}
      {request.id_servicio && (
        <Form layout='vertical' className='mt-4 max-w-[15rem]'>
          <Form.Item
            label='Asigna un precio al servicio'
          >
            <Input size='large'  addonBefore={'S/.'} />
          </Form.Item>
        </Form>
      )}
    </div>
  )
}
