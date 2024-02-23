import { PreQuotedProduct, Product } from 'models/Products' 
import { QuotationRequest, ServiceQuotationRequest } from 'models/Quotation'

export type CreateQuotationRequest = QuotationRequest & {
  products: Partial<PreQuotedProduct>[]
}

export type GetQuotationRequest = QuotationRequest & {
  nombre_asignado: string | null
  apellidos_asignado: string | null
}

export type OptionalServiceQuotationRequest = Partial<ServiceQuotationRequest> & GetQuotationRequest

export type GetProductsQuotationRequest = Product & {
  cantidad: number
  nombre: string
  precio: number
  descuentos: number
  precio_unitario: number
}

export type EditProductsPrice = Pick<GetProductsQuotationRequest, 'id' | 'precio_unitario'>