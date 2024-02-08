export const getToken = () => {
  return localStorage.getItem('PeruScale-token')
}

export const setToken = (token: string) => {
  localStorage.setItem('PeruScale-token', token)
}

export const setAccessToken = (token: string) => {
  localStorage.setItem('PeruScale-access-token', token)
}

export const getAccessToken = () => {
  return localStorage.getItem('PeruScale-access-token')
}

export const deleteAccessToken = () => {
  localStorage.removeItem('PeruScale-access-token')
}