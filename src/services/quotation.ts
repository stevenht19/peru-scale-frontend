import { QuotationRequest, ServiceQuotationRequest } from 'models/Quotation'
import { CreateQuotationRequest, GetProductsQuotationRequest } from 'shared/quotation'
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

export const editProductsPrice = (products: GetProductsQuotationRequest[]) => {
  return api(HttpMethod.PATCH, `/cotizaciones/productos/precio-unitario`, { products })
}

export const editServicePrice = (price: number, id: number) => {
  return api(HttpMethod.PATCH, `/cotizaciones/servicio/${id}/precio`, { price })
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

export const getAssignedRequestsByUserId = (userId: number) => {
  return api(HttpMethod.GET, `/cotizaciones/pendientes/${userId}`)
}

export const emitQuotation = (formData: FormData, requestId: number) => {
  return api(HttpMethod.POST, `/cotizaciones/emitir/${requestId}`, formData)
}