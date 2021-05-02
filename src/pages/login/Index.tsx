import { Button, TextField } from '@material-ui/core'
import React, { FC } from 'react'
import { useAppDispatch } from '../../hooks'
import { login } from '../../slices/user/userSlice'
import { useStyles } from './styles'
import { useForm, Controller } from 'react-hook-form'
import { User } from '../../interfaces/User'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(4),
})

export const Login: FC = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<User>({ resolver: yupResolver(schema), mode: 'all' })

  const onSubmit = (data: User) => {
    dispatch(login(data))
  }
  return (
    <div className={classes.layout}>
      <h1 className={classes.headline}> TODO APP</h1>
      <p>Make your tasks realisable</p>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.card}>
        <Controller
          name="email"
          control={control}
          defaultValue="a@a"
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.email}
              label="Email"
              className={classes.textField}
              variant="outlined"
            />
          )}
        />
        <p className={classes.errorMessage}>{errors.email?.message}</p>
        <Controller
          name="password"
          control={control}
          defaultValue="123"
          render={({ field }) => (
            <TextField
              error={!!errors.password}
              {...field}
              type="password"
              label="Password"
              className={`${classes.textField} ${classes.marginTop}`}
              variant="outlined"
            />
          )}
        />
        <p className={classes.errorMessage}>{errors.password?.message}</p>

        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.marginTop}
          fullWidth
          type="submit"
          disabled={!isValid}
        >
          Login
        </Button>
      </form>
    </div>
  )
}
