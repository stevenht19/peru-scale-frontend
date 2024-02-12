import { QuotationRequestState } from 'models/Quotation'

export const quotationColors = {
  [QuotationRequestState.CANCELED]: 'green',
  [QuotationRequestState.PENDING]: 'yellow',
  [QuotationRequestState.DENIED]: 'red',
}