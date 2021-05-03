import React, { Dispatch, FC, SetStateAction } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Switch,
  TextField,
} from '@material-ui/core'
import { Controller, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../hooks'
import { Todo } from '../../interfaces/Todo'
import { add, update } from '../../slices/todos/todosSlice'
import { useStyles } from './styles'
import { v4 as uuid } from 'uuid'

interface Props {
  open: boolean
  handleClose: () => void
  todo?: Todo
  setOpen: Dispatch<SetStateAction<boolean>>
}

const TodoForm: FC<Props> = (props) => {
  const { open, handleClose, todo, setOpen } = props
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const defaultValues = {
    title: todo?.title || '',
    content: todo?.content || '',
    status: todo?.status || false,
  }
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm({ defaultValues, mode: 'all' })

  const onSubmit = (data: Todo) => {
    if (todo) {
      dispatch(update({ ...todo, ...data }))
    } else {
      const todo: Todo = { ...data, id: uuid(), status: false }
      dispatch(add(todo))
      reset()
    }
    setOpen(false)
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      classes={{ paper: classes.paper }}
    >
      <DialogTitle id='alert-dialog-title'>
        {' '}
        {!!todo ? 'Update' : 'Create'} Task{' '}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <div>
            <Controller
              name='title'
              control={control}
              defaultValue={todo?.title}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id='standard-basic'
                  label='Task name'
                  fullWidth
                  variant='outlined'
                  required
                />
              )}
            />
          </div>
          <div>
            <Controller
              name='content'
              defaultValue={todo?.content}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id='standard-basic'
                  label='Content'
                  fullWidth
                  className={classes.marginTop}
                  variant='outlined'
                  required
                />
              )}
            />
          </div>
          <div>
            {!!todo && (
              <Controller
                name='status'
                defaultValue={todo?.status}
                control={control}
                render={({ field }) => (
                  <Switch
                    {...field}
                    checked={field.value}
                    color='primary'
                    name='checkedB'
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                )}
              />
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            CANCEL
          </Button>
          <Button
            color='primary'
            variant='contained'
            disabled={!isValid}
            autoFocus
            type='submit'
          >
            {todo?.id ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default TodoForm
