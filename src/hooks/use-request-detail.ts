import { QuotationRequest } from 'models/Quotation'
import { useEffect, useState } from 'react'
import { getQuotationRequestDetail } from 'services/quotation'
import { GetProductsQuotationRequest, OptionalServiceQuotationRequest } from 'shared/quotation'

export function useRequestDetail(requestId: QuotationRequest['id']) {
  const [request, setRequest] = useState<OptionalServiceQuotationRequest | null>(null)
  const [products, setProducts] = useState<GetProductsQuotationRequest[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const isValidId = !isNaN(requestId)
    setLoading(true)

    const getDetail = () => {
      if (isValidId) request

      getQuotationRequestDetail(requestId)
        .then((res) => {
          setRequest(res.data)
          setProducts(res.products)
        }).finally(() => {
          setLoading(false)
        })
    }

    getDetail()

  }, [requestId])

  const reload = () => {
    setLoading(true)
    getQuotationRequestDetail(requestId)
      .then((res) => {
        setRequest(res.data)
        setProducts(res.products)
      }).finally(() => {
        setLoading(false)
      })
  }
  return {
    request,
    products,
    loading,
    reload,
  }
}
