import { Table } from 'antd'
import { CreateUser, GetUser } from 'shared/user'
import { columns } from './utils'
import { useRoles } from 'hooks/use-roles'

export type UsersTableProps = {
  users: GetUser[]
  loading: boolean
  onEditUser(user: CreateUser): Promise<void>
}

export const UsersTable: React.FC<UsersTableProps> = ({
  users,
  loading,
  onEditUser
}) => {

  const { roles } = useRoles()

  return (
    <Table
      columns={columns({ onEditUser, roles })}
      dataSource={users}
      loading={loading}
      scroll={{
        x: 1600
      }}
      rowKey={(user) => user.id}
    />
  )
}
