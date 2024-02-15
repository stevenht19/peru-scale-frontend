import { useUsers } from 'hooks/use-users'
import { UsersTable } from 'components/dashboard/users/users-table'
import { Search } from 'components/dashboard/users/search'
import { Filters } from 'components/dashboard/users/filters'
import { AddEmployee } from 'components/dashboard/users/add-employee'
import { RoleSelector } from 'components/dashboard/users/role-selector'

export default function UserManagement() {
  const {
    loading,
    users,
    onCreateUser,
    onEditUser,
    handleSearch,
    getUsers,
    handleFilterByRol
  } = useUsers()

  return (
    <div className='p-7'>
      <h2 className='mb-3 xl:mb-2 text-xl font-semibold'>
        Administración de Usuarios
      </h2>
      <Filters totalData={users.length}>
        <RoleSelector
          className='w-32'
          onChange={handleFilterByRol}
          defaultValue={0}
          allowAll
        />
        <Search onChange={handleSearch} />
        <AddEmployee onCreateUser={onCreateUser} />
      </Filters>
      <UsersTable
        users={getUsers()}
        loading={loading}
        onEditUser={onEditUser}
      />
    </div>
  )
}
