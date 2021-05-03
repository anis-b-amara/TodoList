import React, { ReactNode } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getUserFromLocalStorage } from '../services/LocalStorage'

interface Props {
  children: ReactNode
  path: string
  exact: boolean
}
const PrivateRoute = ({ children, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      exact
      render={() => {
        const userInfo = getUserFromLocalStorage()

        return !!userInfo ? children : <Redirect to='/login' />
      }}
    ></Route>
  )
}

export default PrivateRoute
