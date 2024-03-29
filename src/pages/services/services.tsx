import { message } from 'antd'
import { useServices } from 'hooks/use-services'
import { Header } from 'layouts/header'
import { ServiceQuotationRequest } from 'models/Quotation'
import { requestServiceQuotation } from 'services/quotation'
import PriceDataForm from 'components/forms/price-personal-data'
import { useSession } from 'hooks/use-session'

export default function Services() {
  const { user } = useSession()
  const { services } = useServices()

  const onSubmit = async (request: ServiceQuotationRequest) => {
    console.log(request)

    await requestServiceQuotation({
      ...request, id_cliente: user?.id ?? null,
      solicitante_correo: user?.correo ?? request?.correo
    })
    message.success('Solicitud enviada correctamente')
  }

  return (
    <>
      <Header />
      <section className="overflow-hidden max-w-6xl mx-auto mt-1 px-3">
        <h2 className='text-xl font-bold mt-4 mb-7'>Solicitud de servicio</h2>
        <PriceDataForm
          onSubmit={onSubmit}
          services={services}
          servicesForm
        />
      </section>
    </>
  )
}
