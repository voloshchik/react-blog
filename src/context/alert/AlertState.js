import React, { useReducer } from 'react'
import { HIDE_ALERT, SHOW_ALERT } from '../types'
import { AlertConstex } from './alertContext'
import { alertReducer } from './alertReducer'

const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, null)

  const hide = () => dispatch({ type: HIDE_ALERT })

  const show = (text, type = 'secondary') => {
    dispatch({ type: SHOW_ALERT, payload: { text, type } })
    setTimeout(hide, 3000)
  }

  return (
    <AlertConstex.Provider value={{ hide, show, alert: state }}>{children}</AlertConstex.Provider>
  )
}

export default AlertState
