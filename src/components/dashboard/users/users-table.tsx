import { Table } from 'antd'
import { GetUser } from 'shared/user'
import { columns } from './utils'

type UsersTableProps = {
  users: GetUser[]
  loading: boolean
}

export const UsersTable: React.FC<UsersTableProps> = ({
  users,
  loading,
}) => {
  return (
    <Table
      columns={columns}
      dataSource={users}
      loading={loading}
      scroll={{ x: 1000 }}
    />
  )
}
