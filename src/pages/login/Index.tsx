import { Button, TextField } from '@material-ui/core'
import React, { FC } from 'react'
import { useAppDispatch } from '../../hooks'
import { login } from '../../slices/user/userSlice'
import { useStyles } from './styles'

export const Login: FC = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  return (
    <div className={classes.layout}>
      <h1 className={classes.headline}> TODO APP</h1>
      <p>Make your tasks realisable</p>
      <div className={classes.card}>
        <TextField
          id="standard-basic"
          label="Email"
          className={classes.textField}
        />
        <TextField
          type="password"
          label="Password"
          className={`${classes.textField} ${classes.marginTop}`}
        />
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.marginTop}
          fullWidth
          onClick={() => dispatch(login({ email: 'a@a', password: 'ppp'}))}
        >
          Login
        </Button>
      </div>
    </div>
  )
}
