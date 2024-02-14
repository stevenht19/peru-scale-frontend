import { Button, message } from 'antd'
import { Routes } from 'consts/routes'
import { useBoolean } from 'hooks/use-boolean'
import { useSession } from 'hooks/use-session'
import { QuotationRequest } from 'models/Quotation'
import { useNavigate } from 'react-router-dom'
import { assignQuotationRequestResponsable } from 'services/quotation'

export const RequestDetailFooter = ({ id, id_asignado }: QuotationRequest) => {
  const { user } = useSession()
  const [loading, setLoading] = useBoolean()
  const navigate = useNavigate()

  if (id_asignado) return null

  const onClick = async () => {
    setLoading.on()
    await assignQuotationRequestResponsable(id, user?.id)
    setLoading.off()
    navigate(`${Routes.DASHBOARD}/${Routes.REQUESTS}`)
    message.success('Solicitud de cotización asignada correctamente')
  }

  return (
    <div className='mt-auto flex justify-end'>
      <Button type='primary' size='large' loading={loading} onClick={onClick}>
        {loading ? 'Asignando...' : 'Asignarme Solicitud'}
      </Button>
    </div>
  )
}
