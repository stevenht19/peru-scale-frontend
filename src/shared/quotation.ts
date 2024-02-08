import { PreQuotedProduct } from 'models/Products' 
import { QuotationRequest } from 'models/Quotation'

export type CreateQuotationRequest = QuotationRequest & {
  products: Partial<PreQuotedProduct>[]
}
