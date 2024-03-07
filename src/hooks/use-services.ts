import { useFetch } from './use-fetch'

export const useServices = () => {
  const { data, isLoading } = useFetch<any[]>('/cotizaciones/servicios')

  return {
    services: data,
    isLoading
  }

}