import React, { FC, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core'
import { useStyles } from './styles'
import { useAppDispatch } from '../../hooks'
import { add } from '../../slices/todos/todosSlice'
import { useForm, Controller } from 'react-hook-form'
import { Todo } from '../../interfaces/Todo'
import { v4 as uuid } from 'uuid'

export const CreateTodo: FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: 'all',
    defaultValues: { title: '', content: '' },
  })
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = (data: Todo) => {
    const todo: Todo = { ...data, id: uuid(), status: false }
    dispatch(add(todo))
    reset()
    handleClose()
  }

  return (
    <div>
      <Button
        variant='contained'
        size='medium'
        color='primary'
        className='button'
        onClick={handleClickOpen}
      >
        CREATE A NEW TASK
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        classes={{ paper: classes.paper }}
      >
        <DialogTitle id='alert-dialog-title'>Add New Task</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <div>
              <Controller
                name='title'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value}
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
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value}
                    label='Content'
                    fullWidth
                    variant='outlined'
                    className={classes.marginTop}
                    required
                  />
                )}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              CANCEL
            </Button>
            <Button
              type='submit'
              disabled={!isValid}
              color='primary'
              variant='contained'
              autoFocus
            >
              CREATE
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}
