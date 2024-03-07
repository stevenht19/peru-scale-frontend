import { useState } from 'react';

export function useError() {
  const [error, setError] = useState<string>('')

  const handleErrorMsg = (msg: string) => {
    setError(msg)
  }

  const resetError = () => setError('')

  return {
    error,
    isError: Boolean(error.trim()),
    handleErrorMsg,
    resetError
  }
}
