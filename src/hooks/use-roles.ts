import { useFetch } from './use-fetch'
import { Roles } from 'models/Roles'

export const useRoles = () => {
  const { data, isLoading } = useFetch<Roles[]>('/admin/roles')

  return {
    roles: data ?? [] as Roles[],
    isLoading
  }
}
