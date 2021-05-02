import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Switch,
  TextField,
} from '@material-ui/core'
import { FC, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Todo } from '../../interfaces/Todo'
import { selectTodo, update } from '../../slices/todos/todosSlice'
import { useStyles } from '../create-todo/styles'

interface Props {
  todoId: string
}
const UpdateTodo: FC<Props> = ({ todoId }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: 'all' })
  const todo = useAppSelector(selectTodo(todoId))
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = (data: Todo) => {
    dispatch(update({ ...todo, ...data }))
    handleClose()
  }

  return (
    <div>
      <Button size='medium' onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        classes={{ paper: classes.paper }}
      >
        <DialogTitle id='alert-dialog-title'>Update Task</DialogTitle>
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
              UPDATE
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}

export default UpdateTodo
