import { QuotationRequest, ServiceQuotationRequest } from 'models/Quotation'
import { CreateQuotationRequest } from 'shared/quotation'
import { HttpMethod, api } from 'utils/api'

export const requestQuotation = (createQuotationReq: CreateQuotationRequest) => {
  return api(HttpMethod.POST, `/cotizaciones/solicitar`, createQuotationReq)
}

export const requestServiceQuotation = (createServiceQuationReq: ServiceQuotationRequest) => {
  return api(HttpMethod.POST, `/cotizaciones/solicitar-servicio`, createServiceQuationReq)
}

export const getQuotationRequests = () => {
  return api(HttpMethod.GET, `/cotizaciones/solicitudes_cotizacion`)
}

export const getQuotationRequestDetail = async (reqId: QuotationRequest['id']) => {
  const res = await api(HttpMethod.GET, `/cotizaciones/solicitudes/${reqId}`)
  return {
    data: res.data,
    products: res?.products ?? []
  }
}

export const assignQuotationRequestResponsable = (
  id: QuotationRequest['id'],
  responsable: QuotationRequest['id_asignado']
) => {
  const assignResponsable = {
    user_id: responsable
  }

  return api(HttpMethod.PATCH, `/cotizaciones/asignar/${id}`, assignResponsable)
}