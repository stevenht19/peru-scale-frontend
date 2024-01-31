import { useState } from 'react'

export const useBoolean = (initialBoolean = false) => {
  const [boolean, setBool] = useState(initialBoolean)

  const setBoolean = {
    on: () => setBool(true),
    off: () => setBool(false),
    toggle: () => setBool(b => !b)
  }

  return [
    boolean,
    setBoolean
  ] as const

}