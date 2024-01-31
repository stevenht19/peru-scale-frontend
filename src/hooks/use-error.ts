import { useState } from 'react';

export function useError() {
  const [error, setError] = useState<string>('')

  const handleErrorMsg = (msg: string) => {
    setError(msg)
  }

  return {
    error,
    isError: Boolean(error.trim().length),
    handleErrorMsg
  }
}
