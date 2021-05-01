import React from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/core'
import theme from './MaterialUITheme'
import { Route, Switch } from 'react-router-dom'
import { Home, Login } from './pages/Index'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App
