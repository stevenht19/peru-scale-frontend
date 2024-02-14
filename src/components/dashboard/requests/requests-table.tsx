import { Table } from 'antd'
import { columns } from './utils'
import { GetQuotationRequest } from 'shared/quotation'

type RequestsTableProps = {
  requests: GetQuotationRequest[]
}

export const RequestsTable = ({ requests }: RequestsTableProps) => {
  return (
    <Table
      columns={columns}
      dataSource={requests}
      rowKey={(req) => req.id}
      scroll={{
        x: 950
      }}
    />
  )
}
