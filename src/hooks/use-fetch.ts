import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher<any, string> = (...args) => fetch(...args).then(res => res.json())

export function useFetch<T>(url: string) {
  const { data, error, isLoading } = useSWR<T, Error>(`${import.meta.env.VITE_API_URL}${url}`, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false
  })
  
  return {
    data: data ?? [],
    error,
    isLoading
  }
}
