import { Services } from 'models/Services'
import { useFetch } from './use-fetch'

export const useServices = () => {
  const { data, isLoading } = useFetch<Services[]>('/cotizaciones/servicios')

  return {
    services: data,
    isLoading
  }

}