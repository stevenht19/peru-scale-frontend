import { QuotationRequest } from 'models/Quotation'
import { useEffect, useState } from 'react'
import { getQuotationRequestDetail } from 'services/quotation'
import { GetProductsQuotationRequest, OptionalServiceQuotationRequest } from 'shared/quotation'

export function useRequestDetail(requestId: QuotationRequest['id']) {
  const [request, setRequest] = useState<OptionalServiceQuotationRequest | null>(null)
  const [products, setProducts] = useState<GetProductsQuotationRequest[]>([])

  useEffect(() => {
    const isValidId = !isNaN(requestId)

    const getDetail = () => {
      if (isValidId) request

      getQuotationRequestDetail(requestId)
        .then((res) => {
          setRequest(res.data)
          setProducts(res.products)
        })
    }

    getDetail()

  }, [requestId])

  return {
    request,
    products
  }
}
