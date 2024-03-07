import { Filters } from 'components/dashboard/users/filters'
import { RequestsTable } from 'components/dashboard/requests/requests-table'
import { useQuotationRequests } from 'hooks/use-quotation-requests'
import { RequestStateSelect } from 'components/dashboard/requests/request-state-select'

export default function Requests() {
  const { requests, getRequests, handleChangeStatus } = useQuotationRequests()

  return (
    <div className='p-7'>
      <h2 className='text-xl font-semibold'>
        Solicitudes de cotización
      </h2>
      <Filters totalData={requests.length}>
        <RequestStateSelect onChange={handleChangeStatus} />
      </Filters>
      <div className='mt-3'>
        <RequestsTable requests={getRequests()} />
      </div>
    </div>
  )
}
