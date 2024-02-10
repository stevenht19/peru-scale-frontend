import { ServiceQuotationRequest } from 'models/Quotation'
import { CreateQuotationRequest } from 'shared/quotation'
import { HttpMethod, api } from 'utils/api'

export const requestQuotation = (createQuotationReq: CreateQuotationRequest) => {
  return api(HttpMethod.POST, `/cotizaciones/solicitar`, createQuotationReq)
}

export const requestServiceQuotation = (createServiceQuationReq: ServiceQuotationRequest) => {
  return api(HttpMethod.POST, `/cotizaciones/solicitar-servicio`, createServiceQuationReq)
}