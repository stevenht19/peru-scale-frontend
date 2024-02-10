import { useUsers } from 'hooks/use-users'
import { UsersTable } from 'components/dashboard/users/users-table'
import { Search } from 'components/dashboard/users/search'
import { Filters } from 'components/dashboard/users/filters'
import { AddEmployee } from 'components/dashboard/users/add-employee'

export default function UserManagement() {
  const { loading, users } = useUsers()

  return (
    <div>
      <h2 className='mb-2 text-xl font-semibold'>
        Administración de Usuarios
      </h2>
      <Filters>
        <Search />
        <AddEmployee />
      </Filters>
      <div className='w-full'>
        <UsersTable
          users={users}
          loading={loading}
        />
      </div>
    </div>
  )
}
