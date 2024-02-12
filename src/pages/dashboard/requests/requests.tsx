import { Filters } from 'components/dashboard/users/filters'
import { RequestsTable } from 'components/dashboard/requests/requests-table'
import { useQuotationRequests } from 'hooks/use-quotation-requests'
import { RequestStateSelect } from 'components/dashboard/requests/request-state-select'

export default function Requests() {
  const { requests, getRequests, handleChangeStatus } = useQuotationRequests()

  return (
    <div>
      <h2 className='mb-3 xl:mb-2 text-xl font-semibold'>
        Solicitudes de cotización
      </h2>
      <Filters totalData={requests.length}>
        <RequestStateSelect onChange={handleChangeStatus} />
      </Filters>
      <div className='mt-2'>
        <RequestsTable requests={getRequests()} />
      </div>
    </div>
  )
}
