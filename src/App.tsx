import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { Home, Login } from './pages/Index'
import PrivateRoute from './routes/PrivateRoute'
import { getUserFromLocalStorage } from './auth/Index'
import { useAppDispatch } from './hooks'
import { login } from './slices/user/userSlice'

function App() {
  const dispatch = useAppDispatch()
  const user = getUserFromLocalStorage()
  if (user) {
    dispatch(login(user))
  }

  return (
    <Switch>
      <Route path='/login' exact>
        <Login />
      </Route>
      <PrivateRoute path='/' exact>
        <Home />
      </PrivateRoute>
    </Switch>
  )
}

export default App
