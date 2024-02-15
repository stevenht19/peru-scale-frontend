import { getToken } from './token';

export const enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH'
}

export const api = async (method: HttpMethod, path: string, body?: unknown, customToken?: string) => {
  const url = `${import.meta.env.VITE_API_URL}${path}`
  const token = customToken ?? getToken()

  const options: RequestInit = {
    method,
    headers: {
      ...(token ? { authorization: token } : {}),
      'Content-Type': 'application/json',
    },
  };

  if (body && typeof body !== 'string') {
    options.body = JSON.stringify(body)
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()

    if (data.error) {
      throw new Error(data.message)
    }

    return data
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw new Error(error! as any)
  }
};
