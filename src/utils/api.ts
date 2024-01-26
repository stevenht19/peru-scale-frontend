export const enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT'
}

export const api = async (method: HttpMethod, path: string, body: unknown) => {
  const url = `${import.meta.env.VITE_API_URL}${path}`

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body && typeof body !== 'string') {
    options.body = JSON.stringify(body)
  } else {
    options.headers = {
      ...options.headers,
      authorization: body as string
    }
  }

  try {
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error('Error making API request:', error)
    throw new Error('Failed to make API request.')
  }
};
