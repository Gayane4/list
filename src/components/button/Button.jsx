import React from 'react'
import style from './style.module.scss'

const Button = ({children,...props}) => {
  return (
   <button {...props} className={style.button}>{children}</button>
  )
}

export default Button