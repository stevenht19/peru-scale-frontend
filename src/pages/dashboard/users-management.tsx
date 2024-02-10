import { useUsers } from 'hooks/use-users'
import { UsersTable } from 'components/dashboard/users/users-table'
import { Search } from 'components/dashboard/users/search'
import { Filters } from 'components/dashboard/users/filters'
import { AddEmployee } from 'components/dashboard/users/add-employee'

export default function UserManagement() {
  const {
    loading,
    users,
    onCreateUser,
    onEditUser,
    handleSearch,
    getUsers
  } = useUsers()

  return (
    <div>
      <h2 className='mb-3 xl:mb-2 text-xl font-semibold'>
        Administración de Usuarios
      </h2>
      <Filters totalUsers={users.length}>
        <Search onChange={handleSearch} />
        <AddEmployee onCreateUser={onCreateUser} />
      </Filters>
      <div className='w-full'>
        <UsersTable
          users={getUsers()}
          loading={loading}
          onEditUser={onEditUser}
        />
      </div>
    </div>
  )
}
