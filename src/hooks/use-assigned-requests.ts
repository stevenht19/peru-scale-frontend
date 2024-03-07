import { useEffect, useState } from 'react'
import { getAssignedRequestsByUserId } from 'services/quotation'
import { useSession } from './use-session'
import { GetQuotationRequest } from 'shared/quotation'

export const useAssignedRequests = () => {
  const [requests, setRequests] = useState<GetQuotationRequest[]>([])

  const { user } = useSession()

  useEffect(() => {
    if (user) {
      getAssignedRequestsByUserId(user.id)
        .then(setRequests)
    }
  }, [user])
  
  return {
    requests
  }
}
