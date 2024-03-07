import { QuotationRequestState } from 'models/Quotation'
import { useEffect, useState } from 'react'
import { getQuotationRequests } from 'services/quotation'
import { GetQuotationRequest } from 'shared/quotation'

export const useQuotationRequests = () => {
  const [requests, setRequests] = useState<GetQuotationRequest[]>([])
  const [status, setStatus] = useState<QuotationRequestState | null>(null)

  useEffect(() => {
    getQuotationRequests()
      .then(setRequests)
  }, [])

  const getRequests = () => {
    return requests.filter(req => !status ? true : req.estado === status)
  }

  const handleChangeStatus = (status: QuotationRequestState) => {
    setStatus(status)
  }

  return {
    requests,
    getRequests,
    handleChangeStatus
  }
}
