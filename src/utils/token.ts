export const getToken = () => {
  return localStorage.getItem('PeruScale-token')
}

export const setToken = (token: string) => {
  localStorage.setItem('PeruScale-token', token)
}