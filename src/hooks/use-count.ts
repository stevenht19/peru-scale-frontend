import { useState } from 'react'

export type CounterProps = {
  counter: number
  add: (max?: () => number) => void
  subtract: (min?: () => number) => void
}

export const useCounter = (value = 0) => {
  const [counter, setCounter] = useState<number>(value)

  const add = (max: () => number) => {
    setCounter(c => c === max() ? c : c + 1)
  }

  const subtract = (min: () => number) => {
    setCounter(c => c === min() ? c : c - 1)
  }

  return {
    counter,
    add,
    subtract
  } as CounterProps

}
