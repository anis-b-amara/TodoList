import React, { FC, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { login, selectUser } from '../../slices/user/userSlice'
import { useStyles } from './styles'
import { useForm, Controller } from 'react-hook-form'
import { User } from '../../interfaces/User'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { auth } from '../../auth/Index'
import { Redirect, useHistory } from 'react-router-dom'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(4),
})

export const Login: FC = () => {
  const user = useAppSelector(selectUser)
  const [isUserConnceted, setIsUserConnected] = useState(() => {
    return !!user.password && !!user.email
  })
  const history = useHistory()
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm<User>({ resolver: yupResolver(schema), mode: 'all' })

  const onSubmit = (data: User) => {
    if (auth(data)) {
      dispatch(login(data))
      setIsAuthenticated(true)
      localStorage.setItem('user', JSON.stringify(data))
      setIsUserConnected(true)
      return history.push('/')
    }
  }

  return (
    <>
      {isUserConnceted ? (
        <Redirect to='/' />
      ) : (
        <div className={classes.layout}>
          <h1 className={classes.headline}> TODO APP</h1>
          <p>Make your tasks realisable</p>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.card}>
            <Controller
              name='email'
              control={control}
              defaultValue='test@test.com'
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.email}
                  label='Email'
                  className={classes.textField}
                  variant='outlined'
                  required
                />
              )}
            />
            <p className={classes.errorMessage}>{errors.email?.message}</p>
            <Controller
              name='password'
              control={control}
              defaultValue='123456'
              render={({ field }) => (
                <TextField
                  error={!!errors.password}
                  {...field}
                  type='password'
                  label='Password'
                  className={`${classes.textField} ${classes.marginTop}`}
                  variant='outlined'
                  required
                />
              )}
            />
            <p className={classes.errorMessage}>{errors.password?.message}</p>

            <Button
              variant='contained'
              size='medium'
              color='primary'
              className={classes.marginTop}
              fullWidth
              type='submit'
              disabled={!isValid}
            >
              Login
            </Button>
            {isSubmitted && !isAuthenticated && (
              <div className={classes.errorMessage}>User Does not exist</div>
            )}
          </form>
        </div>
      )}
    </>
  )
}
