import React from 'react'
import { useState } from 'react'
import cls from './Counter.module.scss'
import { Button } from '../ui/Button/Button'

export const Counter = () => {
  const [count, setCount] = useState(0)
  // const state = useState(0)
  // console.log(state)

  const onClickPlus = () => {
    setCount(count => count + 1)
    setCount(count => count + 5)
  }

  const onClickMinus = () => {
    setCount(count => count - 1)
    setCount(count => count - 3)
  }

  return (
    <div className={cls.wrap}>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <Button
            btnClass='minus'
            onClick={onClickMinus}
        >
            - Минус
        </Button>
        <Button
            btnClass='plus'
            onClick={onClickPlus}
        >
            Плюс +
        </Button>
    </div>
  )
}
