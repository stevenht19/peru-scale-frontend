import { LoaderFunctionArgs } from 'react-router-dom'
import { getQuotationRequestDetail } from 'services/quotation'

export const quotationLoader = async ({ params }: LoaderFunctionArgs) => {
  const { data, products } = await getQuotationRequestDetail(+params!.id!)

  return {
    quotation: data,
    products: products
  }
}
