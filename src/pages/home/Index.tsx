import { AppBar, Button, Grid, Toolbar } from '@material-ui/core'
import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { getTodosFromLocalStorage, removeUserFromLocalStorage } from '../../services/LocalStorage'
import { fetch, selectTodos } from '../../slices/todos/todosSlice'
import { logout } from '../../slices/user/userSlice'
import { Tasks } from '../tasks/Index'
import { useStyles } from './styles'

export const Home: FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const todos = useAppSelector(selectTodos)
  const todosFromLocaStorage = getTodosFromLocalStorage()

  useEffect(() => {
    if ((!todos || !todos.length) && todosFromLocaStorage) {
      dispatch(fetch(todosFromLocaStorage))
    }
  }, [dispatch, todos, todosFromLocaStorage])

  const signout = () => {
    removeUserFromLocalStorage()
    dispatch(logout())
    return history.push('/login')
  }

  return (
    <Grid container direction='column' className={classes.layout}>
      <AppBar position='static'>
        <Toolbar>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <h1>TODO APP</h1>
            <Button color='inherit' onClick={signout}>
              Logout
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Tasks />
      </div>
    </Grid>
  )
}
