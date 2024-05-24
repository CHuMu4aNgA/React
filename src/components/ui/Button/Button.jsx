import React from 'react'
import { classNames } from '../../../utils/classNames'
import cls from './Button.module.scss'

export const Button = (props) => {
  const {
    children,
    btnClass,
    ...otherProps
  } = props
  
  return (
    <button
      className={classNames(cls.btn, [cls[btnClass]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
