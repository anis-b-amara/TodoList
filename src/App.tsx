import React from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/core'
import theme from './MaterialUITheme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>Hello World</div>
      </div>
    </ThemeProvider>
  )
}

export default App
