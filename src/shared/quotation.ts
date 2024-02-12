import { PreQuotedProduct } from 'models/Products' 
import { QuotationRequest, ServiceQuotationRequest } from 'models/Quotation'

export type CreateQuotationRequest = QuotationRequest & {
  products: Partial<PreQuotedProduct>[]
}

export type GetQuotationRequest = QuotationRequest & {
  nombre_asignado: string | null
}

export type OptionalServiceQuotationRequest = Partial<ServiceQuotationRequest>

export type GetProductsQuotationRequest = {
  imagen: string
  cantidad: number
  nombre: string
}