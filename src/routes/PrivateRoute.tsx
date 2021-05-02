import React, { ReactNode } from 'react'
import { Redirect, Route } from 'react-router-dom'

interface Props {
  children: ReactNode,
  path: string
  exact: boolean
}
const PrivateRoute = ({ children, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      exact
      render={() => {
        const userStorage = localStorage.getItem('user')
        const userInfo = userStorage && JSON.parse(userStorage)
        
        return !!userInfo ? children : <Redirect to='/login' />
      }}
    ></Route>
  )
}

export default PrivateRoute
