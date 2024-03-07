import { GetUser } from 'shared/user'

export const sortUsersByName = (users: GetUser[]) => {
  const sortedUsers = users.sort((a, b) => {
    const fullNameA = `${a.nombres} ${a.apellidos}`.toLowerCase();
    const fullNameB = `${b.nombres} ${b.apellidos}`.toLowerCase();

    if (fullNameA < fullNameB) {
      return -1
    }
    if (fullNameA > fullNameB) {
      return 1
    }
    return 0
  })

  return sortedUsers
}
